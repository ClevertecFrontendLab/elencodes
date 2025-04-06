import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

import avatar from '../../assets/images/avatar_header.svg';

function UserProfile(): ReactElement {
    return (
        <>
            <Flex padding='16px 0' width='355px' justifyContent='space-between'>
                <Box height='48px' width='48px'>
                    <Avatar
                        objectFit='cover'
                        height='100%'
                        width='100%'
                        name='Екатерина Константинопольская'
                        src={avatar}
                    />
                </Box>
                <Card bg='unset' shadow='unset' borderRadius='unset' height='48px'>
                    <CardHeader padding='0'>
                        <Heading
                            as='h3'
                            fontFamily='Inter'
                            fontSize='18px'
                            fontWeight='medium'
                            lineHeight='156%'
                            color='#000000'
                        >
                            Екатерина Константинопольская
                        </Heading>
                    </CardHeader>
                    <CardBody padding='0'>
                        <Text
                            fontFamily='Inter'
                            fontSize='14px'
                            fontWeight='normal'
                            lineHeight='143%'
                            color='#000000a3'
                        >
                            @bake_and_pie
                        </Text>
                    </CardBody>
                </Card>
            </Flex>
        </>
    );
}

export default UserProfile;
