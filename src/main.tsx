import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';

import { App } from './app/App';
import { TabProvider } from './context/TabContext';
import { store } from './store/configure-store';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <TabProvider>
                    <App />
                </TabProvider>
            </Provider>
        </BrowserRouter>
    </StrictMode>,
);
