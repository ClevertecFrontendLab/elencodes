import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ReactElement } from 'react';

function BreadCrumb(): ReactElement {
    return (
        <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink fontFamily='Inter' fontSize='16px' fontWeight='normal'>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
}

export default BreadCrumb;
