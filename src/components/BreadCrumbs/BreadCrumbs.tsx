import { BreadcrumbLink, ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { useTabContext } from '~/context/useTabContext';

import { breadcrumbWrapperStyles } from './BreadCrumbs.style';

export const BreadCrumbs = () => {
    const { tabTitle } = useTabContext();
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(Boolean);

    const isHomePage = location.pathname === '/';

    const PATH_TRANSLATIONS: Record<string, string> = {
        vegan: 'Веганская кухня',
        juciest: 'Самое сочное',
    };

    return (
        <Breadcrumb
            spacing='2px'
            separator={<ChevronRightIcon color='gray.800' />}
            sx={breadcrumbWrapperStyles}
        >
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to='/' color={isHomePage ? 'black' : 'blackAlpha.700'}>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>

            {!isHomePage &&
                pathnames.map((pathSegment, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    const displayName =
                        PATH_TRANSLATIONS[pathSegment] || pathSegment.split('-').join(' ');

                    return (
                        <BreadcrumbItem key={pathSegment} isCurrentPage={isLast && !tabTitle}>
                            {isLast && !tabTitle ? (
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

            {/* Добавляем таб только если он отличается от предыдущей крошки */}
            {!isHomePage &&
                tabTitle &&
                tabTitle !== PATH_TRANSLATIONS[pathnames[pathnames.length - 1]] && (
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink as='span' color='black'>
                            {tabTitle}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                )}
        </Breadcrumb>
    );
};
