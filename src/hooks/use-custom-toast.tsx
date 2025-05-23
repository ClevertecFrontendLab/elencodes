import { Box, CloseButton, Flex, Text, useToast, UseToastOptions } from '@chakra-ui/react';

import { CLOSE_ALERT_BUTTON, ERROR_NOTIFICATION } from '~/constants/data-test-ids.ts';
import { Statuses } from '~/query/constants/status-codes';
import { getToastBackgroundColor } from '~/utils/get-toast-background-color.ts';
import { getToastIcon } from '~/utils/get-toast-icon.tsx';

export const useCustomToast = () => {
    const toast = useToast();

    const baseToast = (options: UseToastOptions, centered = true) => {
        if (options.id && !toast.isActive(options.id)) {
            toast({
                status: Statuses.ERROR,
                duration: 15000,
                isClosable: true,
                position: 'bottom',
                containerStyle: {
                    width: '100%',
                    maxW: 424,
                    marginBottom: 20,
                    paddingX: 4,
                    mr: { base: 0, lg: centered ? 0 : '50%' },
                },
                render: ({ title, status = Statuses.ERROR, description, onClose }) => (
                    <Box
                        data-test-id={ERROR_NOTIFICATION}
                        bg={getToastBackgroundColor(status as Statuses)}
                        color='white'
                        p={3}
                    >
                        <Flex justify='space-between' gap={2}>
                            <Flex align='start' gap={4}>
                                <Box alignSelf='center' mb={1}>
                                    {getToastIcon(status as Statuses)}
                                </Box>
                                <Box>
                                    {title && <Text fontWeight='bold'>{title}</Text>}
                                    {description && <Text>{description}</Text>}
                                </Box>
                            </Flex>
                            <CloseButton
                                data-test-id={CLOSE_ALERT_BUTTON}
                                size='sm'
                                onClick={onClose}
                            />
                        </Flex>
                    </Box>
                ),
                ...options,
            });
        }
    };

    baseToast.isActive = toast.isActive;

    return {
        toast: baseToast,
    };
};
