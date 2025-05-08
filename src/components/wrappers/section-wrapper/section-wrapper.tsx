import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { ButtonArrowRightIcon } from '~/icons/button-icons/button-arrow-right-icon';

type SectionWrapperProps = {
    title: string;
    description?: string;
    buttonLabel?: string;
    onButtonClick?: () => void;
    theme?: 'light' | 'lime';
    children: ReactNode;
    dataTestId?: string;
    dataTestIdMob?: string;
};

export const SectionWrapper = ({
    title,
    description,
    buttonLabel,
    onButtonClick,
    theme = 'light',
    children,
    dataTestId,
    dataTestIdMob,
}: SectionWrapperProps) => (
    <Box
        w='100%'
        pt={{ base: 4, sm: 6 }}
        borderRadius='16px'
        mt={theme === 'lime' ? 8 : 0}
        bg={theme === 'lime' ? 'lime.300' : 'white'}
    >
        <Flex
            justify='space-between'
            align={{ base: 'start', sm: 'center' }}
            flexDir={{ base: 'column', sm: 'row' }}
            mb={4}
        >
            <Box>
                <Heading
                    fontWeight='500'
                    fontSize={{
                        xl: theme === 'lime' ? '36px' : '48px',
                        md: '36px',
                        base: '24px',
                    }}
                    mb={description ? 1 : 0}
                    ml={{ base: 0, sm: 2 }}
                    px={theme === 'lime' ? '4' : '0'}
                >
                    {title}
                </Heading>
                {description && (
                    <Text fontSize='sm' color='gray.600' maxW='540px'>
                        {description}
                    </Text>
                )}
            </Box>
            {buttonLabel && (
                <Button
                    size='md'
                    bg={theme === 'lime' ? 'lime.300' : 'lime.400'}
                    onClick={onButtonClick}
                    rightIcon={<ButtonArrowRightIcon boxSize='16px' color='black' />}
                    display={{ base: 'none', sm: 'block' }}
                    _hover={{ bg: 'lime.50' }}
                    data-test-id={dataTestId}
                >
                    {buttonLabel}
                </Button>
            )}
        </Flex>
        <Box>{children}</Box>
        {buttonLabel && (
            <Flex p={4} justifyContent='center'>
                <Button
                    size='md'
                    bg={theme === 'lime' ? 'lime.300' : 'lime.400'}
                    onClick={onButtonClick}
                    rightIcon={<ButtonArrowRightIcon boxSize='16px' color='black' />}
                    data-test-id={dataTestIdMob}
                    display={{ base: 'flex', sm: 'none' }}
                    alignItems='center'
                >
                    {buttonLabel}
                </Button>
            </Flex>
        )}
    </Box>
);
