import { BreadcrumbLink, ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { breadcrumbWrapperStyles } from './BreadCrumbs.style';

export const BreadCrumbs = () => {
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

            {pathnames.map((pathSegment, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                const displayName =
                    PATH_TRANSLATIONS[pathSegment] || pathSegment.split('-').join(' ');

                return (
                    <BreadcrumbItem key={pathSegment} isCurrentPage={isLast}>
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
    );
};
