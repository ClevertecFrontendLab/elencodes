import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { PATHS, staticRoutes } from '~/app/routes/paths';
import { BREADCRUMBS } from '~/constants/data-test-ids';
import { useCategoryParams } from '~/hooks/use-category-params';
import { useScreenSize } from '~/hooks/use-screen-size';
import { useGetRecipeByIdQuery } from '~/query/services/recipes/recipes-api';
import { useAppSelector } from '~/redux/hooks';
import { selectCategories, selectSubCategories } from '~/redux/slices/category-slice';
import { getFirstSubcategoryPath } from '~/utils/get-first-subcategory-path';

export const AppBreadcrumb = ({ onClose }: { onClose?: () => void }) => {
    const { isTablet } = useScreenSize();
    const location = useLocation();
    const pathParts = location.pathname.split(PATHS.ROOT).filter(Boolean);

    const categories = useAppSelector(selectCategories);
    const subCategories = useAppSelector(selectSubCategories);
    const { recipeId } = useCategoryParams();

    const hiddenPaths = [PATHS.NOT_FOUND, PATHS.ERROR];

    const { data: recipe } = useGetRecipeByIdQuery(recipeId || '', {
        skip: !recipeId,
    });

    if (hiddenPaths.includes(location.pathname)) {
        return null;
    }

    const breadcrumbs = pathParts.map((_, index) => {
        const isLast = index === pathParts.length - 1;
        const path = `${PATHS.ROOT}${pathParts.slice(0, index + 1).join(PATHS.ROOT)}`;

        if (staticRoutes[path]) {
            return (
                <BreadcrumbItem key={path} isCurrentPage={isLast}>
                    <BreadcrumbLink
                        as={Link}
                        to={path}
                        color={isLast ? 'black' : 'blackAlpha.700'}
                        onClick={!isLast ? onClose : undefined}
                    >
                        {staticRoutes[path]}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            );
        }

        const matchedCategory = categories.find((cat) => `${PATHS.ROOT}${cat.category}` === path);
        if (matchedCategory) {
            const redirectPath = getFirstSubcategoryPath(matchedCategory.category, categories);
            return (
                <BreadcrumbItem key={path} isCurrentPage={isLast}>
                    <BreadcrumbLink
                        as={Link}
                        to={redirectPath}
                        color={isLast ? 'black' : 'blackAlpha.700'}
                        onClick={!isLast ? onClose : undefined}
                    >
                        {matchedCategory.title}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            );
        }

        const matchedSub = subCategories.find((sub) => {
            const rootCategory = categories.find((cat) => cat._id === sub.rootCategoryId);
            return `${PATHS.ROOT}${rootCategory?.category}${PATHS.ROOT}${sub.category}` === path;
        });

        if (matchedSub) {
            return (
                <BreadcrumbItem key={path} isCurrentPage={isLast}>
                    <BreadcrumbLink
                        as={Link}
                        to={path}
                        color={isLast ? 'black' : 'blackAlpha.700'}
                        onClick={!isLast ? onClose : undefined}
                    >
                        {matchedSub.title}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            );
        }

        const isRecipePage = pathParts.length === 3 && index === 2;
        if (isRecipePage && recipe) {
            return (
                <BreadcrumbItem key={path} isCurrentPage>
                    <BreadcrumbLink color='black'>{recipe.title}</BreadcrumbLink>
                </BreadcrumbItem>
            );
        }

        return null;
    });

    return (
        <Breadcrumb
            listProps={{ flexWrap: 'wrap' }}
            fontSize='sm'
            separator='›'
            ml={isTablet ? '14px' : '128px'}
            data-test-id={BREADCRUMBS}
        >
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to={PATHS.ROOT} color='blackAlpha.700' onClick={onClose}>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>
            {breadcrumbs}
        </Breadcrumb>
    );
};
