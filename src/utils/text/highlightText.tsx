import { Text } from '@chakra-ui/react';

export const highlightText = (text: string, searchQuery: string) => {
    if (!searchQuery.trim()) return text;

    const regex = new RegExp(`(${searchQuery})`, 'gi');
    return text.split(regex).map((part, index) =>
        part.toLowerCase() === searchQuery.toLowerCase() ? (
            <Text
                as='span'
                key={index}
                color='lime.600'
                display='inline'
                fontSize={{ base: 'md', lg: 'lg', xxl: 'xl' }}
                fontWeight={500}
            >
                {part}
            </Text>
        ) : (
            <Text
                as='span'
                key={index}
                display='inline'
                fontSize={{ base: 'md', lg: 'lg', xxl: 'xl' }}
                fontWeight={500}
            >
                {part}
            </Text>
        ),
    );
};
