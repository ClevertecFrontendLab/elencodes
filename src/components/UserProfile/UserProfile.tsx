import { Avatar, Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

import avatar from '../../assets/images/avatar_header.png';

function UserProfile(): ReactElement {
    return (
        <>
            <Flex>
                <Avatar
                    height='48px'
                    width='48px'
                    name='Екатерина Константинопольская'
                    src={avatar}
                />
                <Card bg='unset' shadow='unset' borderRadius='unset'>
                    <CardHeader padding='0' height='28px'>
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
                    <CardBody>
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
