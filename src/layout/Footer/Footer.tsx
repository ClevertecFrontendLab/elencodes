import { Grid } from '@chakra-ui/icons';

import { FooterItem } from '~/components/FooterItem/FooterItem';
import { DATA_TEST_ID } from '~/constants/test-id';
import { footerItems } from '~/data/footerItemsData.tsx';

import { footerGridContainerStyles } from './Footer.styles';

export const Footer = () => (
    <Grid
        as='footer'
        gridTemplateColumns='1fr 1fr 1fr 1fr'
        data-test-id={DATA_TEST_ID.footer}
        pos='fixed'
        bottom={0}
        left={0}
        right={0}
        zIndex={10}
        sx={footerGridContainerStyles}
        display={{ base: 'flex', xl: 'none' }}
    >
        {footerItems.map((item) => (
            <FooterItem key={item.id} text={item.text} isActive={item.isActive}>
                {item.icon}
            </FooterItem>
        ))}
    </Grid>
);
