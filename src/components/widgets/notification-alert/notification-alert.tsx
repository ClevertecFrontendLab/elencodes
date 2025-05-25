import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    Center,
    CloseButton,
} from '@chakra-ui/react';
import { useEffect } from 'react';

import { DATA_TEST_ID } from '~/constants/data-test-ids';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { selectAppError, setAppError } from '~/redux/slices/app-slice.ts';

const NOTIFICATION_TIMER = 3000;

export const NotificationAlert = () => {
    const error = useAppSelector(selectAppError);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                dispatch(setAppError(null));
            }, NOTIFICATION_TIMER);

            return () => clearTimeout(timer);
        }
    }, [error, dispatch]);

    if (!error) return null;

    const onCloseAlert = () => dispatch(setAppError(null));

    return (
        <Center
            zIndex={2}
            position='fixed'
            bottom={{ base: '80px', md: '100px', lg: '16px' }}
            left='50%'
            transform='translateX(-50%)'
            width={{ base: '328px', md: '328px', lg: '400px' }}
        >
            <Alert
                data-test-id={DATA_TEST_ID.ERROR_NOTIFICATION}
                color='white'
                backgroundColor='red.500'
                p='12px 16px'
                fontSize='16px'
            >
                <AlertIcon color='white' boxSize='20px' />
                <Box>
                    <AlertTitle fontWeight={700} pb='2px'>
                        {error.title}
                    </AlertTitle>
                    <AlertDescription
                        fontWeight={400}
                        width={{ base: '80%', lg: '100%' }}
                        display='inline-block'
                    >
                        {error.description}
                    </AlertDescription>
                </Box>
                <CloseButton
                    data-test-id={DATA_TEST_ID.CLOSE_ALERT_BUTTON}
                    alignSelf='flex-start'
                    position='relative'
                    right={-1}
                    top={-1}
                    onClick={onCloseAlert}
                />
            </Alert>
        </Center>
    );
};
