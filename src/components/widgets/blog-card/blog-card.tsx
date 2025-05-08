import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';

import { Blog } from '~/types/blog-type';

export const BlogCard = ({ name, username, image, description }: Blog) => (
    <Card
        maxW={{ base: '100%', sm: '32%' }}
        transition='box-shadow 0.2s ease'
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
    >
        <CardHeader px={{ base: 3, md: 6 }} pb={0}>
            <Flex gap='3'>
                <Flex gap='3' alignItems='center' wrap='nowrap'>
                    <Avatar name='Segun Adebayo' src={image} size={{ base: 'sm', md: 'md' }} />
                    <Box>
                        <Heading
                            size={{ base: 'sm', xl: '18px' }}
                            fontWeight={500}
                            wordBreak='break-all'
                            noOfLines={1}
                        >
                            {name}
                        </Heading>
                        <Text size={{ base: 'xs', md: 'sm' }} color='blackAlpha.700'>
                            {username}
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </CardHeader>
        <CardBody p={{ base: 4, lg: 6 }}>
            <Text noOfLines={3} fontSize='14px'>
                {description}
            </Text>
        </CardBody>
    </Card>
);
