import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

import avatar from '../../assets/images/avatar_header.svg';
import {
    avatarBoxStyles,
    cardHeaderStyles,
    headingStyles,
    textStyles,
    userCard,
    userProfileWrapper,
} from './UserProfile.styles';

function UserProfile(): ReactElement {
    return (
        <>
            <Flex sx={userProfileWrapper}>
                <Box sx={avatarBoxStyles}>
                    <Avatar
                        objectFit='cover'
                        height='100%'
                        width='100%'
                        name='Екатерина Константинопольская'
                        src={avatar}
                    />
                </Box>
                <Card sx={userCard}>
                    <CardHeader sx={cardHeaderStyles}>
                        <Heading as='h3' sx={headingStyles}>
                            Екатерина Константинопольская
                        </Heading>
                    </CardHeader>
                    <CardBody padding='0'>
                        <Text sx={textStyles}>@bake_and_pie</Text>
                    </CardBody>
                </Card>
            </Flex>
        </>
    );
}

export default UserProfile;
