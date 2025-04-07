import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { breadcrumbItemStyles, breadcrumbWrapperStyles } from './BreadCrumb.style';

function BreadCrumb(): ReactElement {
    return (
        <Breadcrumb sx={breadcrumbWrapperStyles}>
            <BreadcrumbItem isCurrentPage sx={breadcrumbItemStyles}>
                <BreadcrumbLink>Главная</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
}

export default BreadCrumb;
