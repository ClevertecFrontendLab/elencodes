import { createContext, ReactNode, useState } from 'react';

type TabContextType = {
    tabTitle: string;
    setTabTitle: (title: string) => void;
};

export const TabContext = createContext<TabContextType | undefined>(undefined);

export const TabProvider = ({ children }: { children: ReactNode }) => {
    const [tabTitle, setTabTitle] = useState('');
    return <TabContext.Provider value={{ tabTitle, setTabTitle }}>{children}</TabContext.Provider>;
};
