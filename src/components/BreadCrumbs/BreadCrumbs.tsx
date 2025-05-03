import { BreadcrumbLink, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { DATA_TEST_ID } from '~/constants/test-id';
import { selectAllRecipes, selectCategories } from '~/model/selectors.ts';
import { useAppSelector } from '~/store/hooks.ts';

type Props = {
    onBreadcrumbItemClick?: () => void;
};

export const BreadCrumbs = ({ onBreadcrumbItemClick }: Props) => {
    const categories = useAppSelector(selectCategories);
    const recipes = useAppSelector(selectAllRecipes);
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter(Boolean);
    const isHomePage = location.pathname === '/';

    const getDisplayName = (pathSegment: string, index: number) => {
        if (index === 0) {
            if (pathSegment === 'the-juiciest') return 'Самое сочное';
            const category = categories.find((cat) => cat.nameEn === pathSegment);
            return category?.name || pathSegment.split('-').join(' ');
        }

        if (index === 1) {
            const category = categories.find((cat) => cat.nameEn === pathNames[0]);
            if (category) {
                const subcategory = category.subcategories.find(
                    (sub) => sub.nameEn === pathSegment,
                );
                return subcategory?.name || pathSegment.split('-').join(' ');
            }
        }

        if (index === 2) {
            const recipe = recipes.find((rec) => rec.id === pathSegment);
            return recipe?.title || pathSegment.split('-').join(' ');
        }

        return pathSegment.split('-').join(' ');
    };

    return (
        <Box
            width='100%'
            css={{
                '& .chakra-breadcrumb__list': {
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    rowGap: '4px',
                },
            }}
        >
            <Breadcrumb
                data-test-id={DATA_TEST_ID.breadcrumbs}
                spacing='0'
                separator={<ChevronRightIcon color='gray.800' />}
                fontSize='16px'
                display='flex'
                flexWrap='wrap'
                alignItems='center'
                ml={{ base: '0', lg: '128px' }}
            >
                <BreadcrumbItem onClick={onBreadcrumbItemClick}>
                    <BreadcrumbLink
                        as={Link}
                        to='/'
                        color={isHomePage ? 'black' : 'blackAlpha.700'}
                        display='flex'
                        flexShrink={0}
                    >
                        Главная
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {pathNames.map((pathSegment, index) => {
                    const category = categories.find((cat) => cat.nameEn === pathSegment);
                    const routeTo =
                        index !== 0
                            ? `/${pathNames.slice(0, index + 1).join('/')}`
                            : `/${pathNames[0]}/${category?.subcategories[0].nameEn}`;
                    const isLast = index === pathNames.length - 1;
                    const displayName = getDisplayName(pathSegment, index);

                    return (
                        <BreadcrumbItem
                            onClick={onBreadcrumbItemClick}
                            key={`${pathSegment}-${index}`}
                            isCurrentPage={isLast}
                            alignItems='center'
                        >
                            {isLast ? (
                                <BreadcrumbLink as='span' color='black'>
                                    {displayName}
                                </BreadcrumbLink>
                            ) : (
                                <BreadcrumbLink as={Link} to={routeTo} color='blackAlpha.700'>
                                    {displayName}
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                    );
                })}
            </Breadcrumb>
        </Box>
    );
};
