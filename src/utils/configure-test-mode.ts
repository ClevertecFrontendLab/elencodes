import { MotionGlobalConfig } from 'framer-motion';

function cypressIsRunning(): boolean {
    return !!(window as unknown as { Cypress: unknown }).Cypress;
}

export const configureTestMode = (): void => {
    if (cypressIsRunning()) {
        MotionGlobalConfig.skipAnimations = true;
    }
    return;
};
