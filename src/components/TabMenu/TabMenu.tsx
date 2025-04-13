import { TabList, Tabs } from '@chakra-ui/icons';
import { Tab } from '@chakra-ui/react';

import { TabMenuPropsType } from '~/types/TabMenuType';

import { tabListBoxStyles } from './TabMenu.styles';

export const TabMenu = ({ tabsList }: TabMenuPropsType) => (
    <Tabs
        mb={6}
        overflow='hidden'
        colorScheme='lime'
        size={{ base: 'sm', md: 'md' }}
        variant='unstyled'
    >
        <TabList sx={tabListBoxStyles}>
            {tabsList.map((item, index) => (
                <Tab key={index} _selected={{ color: 'lime.600' }}>
                    {item}
                </Tab>
            ))}
        </TabList>
    </Tabs>
);
