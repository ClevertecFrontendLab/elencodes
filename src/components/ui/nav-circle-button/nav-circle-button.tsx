import { IconButton, Text, VStack } from '@chakra-ui/react';
import { ReactElement } from 'react';

type NavCircleButtonProps = {
    icon: ReactElement;
    label: string;
} & Partial<{
    isPrimary: boolean;
    onClick: () => void;
}>;

export const NavCircleButton = ({
    icon,
    label,
    isPrimary = false,
    onClick,
}: NavCircleButtonProps) => (
    <VStack spacing={1} textAlign='center' onClick={onClick} cursor='pointer'>
        <IconButton
            aria-label={label}
            icon={icon}
            isRound
            size='md'
            fontSize='20px'
            bg={isPrimary ? 'black' : 'transparent'}
            boxShadow={isPrimary ? '0 0 20px 0px #c4ff61' : 'none'}
        />
        <Text
            fontSize='xs'
            fontWeight={isPrimary ? '500' : ''}
            color={isPrimary ? 'black' : 'blackAlpha.700'}
        >
            {label}
        </Text>
    </VStack>
);
