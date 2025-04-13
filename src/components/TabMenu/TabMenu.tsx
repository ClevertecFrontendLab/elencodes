import { Tab, TabList, Tabs } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

import { useTabContext } from '~/context/useTabContext';
import { TabMenuPropsType } from '~/types/TabMenuType';

import { tabListBoxStyles } from './TabMenu.styles';

export const TabMenu = ({ tabsList }: TabMenuPropsType) => {
    const { tabTitle, setTabTitle } = useTabContext();
    const initialIndex = tabsList.findIndex((item) => item === tabTitle);
    const [activeIndex, setActiveIndex] = useState(initialIndex >= 0 ? initialIndex : 0);

    const tabListRef = useRef<HTMLDivElement>(null);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    // Прокрутка активного таба в центр
    useEffect(() => {
        const activeTab = tabRefs.current[activeIndex];
        const container = tabListRef.current;

        if (activeTab && container) {
            const offsetLeft = activeTab.offsetLeft;
            const offsetWidth = activeTab.offsetWidth;
            const containerWidth = container.offsetWidth;

            const scrollLeft = offsetLeft - containerWidth / 2 + offsetWidth / 2;

            container.scrollTo({
                left: scrollLeft,
                behavior: 'smooth',
            });
        }
    }, [activeIndex]);

    // Устанавливаем дефолтный tabTitle, если он не задан
    useEffect(() => {
        if (!tabTitle && tabsList.length) {
            setTabTitle(tabsList[0]);
        }
    }, [tabTitle, tabsList, setTabTitle]);

    const handleTabChange = (index: number) => {
        setActiveIndex(index);
        setTabTitle(tabsList[index]);
    };

    return (
        <Tabs
            mb={6}
            overflow='hidden'
            colorScheme='lime'
            size={{ base: 'sm', md: 'md' }}
            variant='unstyled'
            index={activeIndex}
            onChange={handleTabChange}
        >
            <TabList ref={tabListRef} sx={tabListBoxStyles}>
                {tabsList.map((item, index) => (
                    <Tab
                        key={index}
                        ref={(el) => {
                            tabRefs.current[index] = el;
                        }}
                        _selected={{ color: 'lime.600' }}
                    >
                        {item}
                    </Tab>
                ))}
            </TabList>
        </Tabs>
    );
};
