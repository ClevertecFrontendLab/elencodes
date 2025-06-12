import { Card, CardBody, CardHeader, CardProps, Text } from '@chakra-ui/react';

import { DATA_TEST_ID } from '~/constants/data-test-ids';
import { formatNoteDate } from '~/utils/format-note-date';

export type BloggerNoteCardProps = {
    date: string;
    text: string;
} & CardProps;

export const BloggerNoteCard = ({ date, text, ...rest }: BloggerNoteCardProps) => (
    <Card {...rest}>
        <CardHeader p={6} pb={4}>
            <Text fontSize='sm' color='lime.600' data-test-id={DATA_TEST_ID.NOTES_CARD_DATE}>
                {formatNoteDate(date)}
            </Text>
        </CardHeader>
        <CardBody p={6} pt={0} pb={5}>
            <Text
                fontSize='sm'
                lineHeight={5}
                letterSpacing='-0.8px'
                data-test-id={DATA_TEST_ID.NOTES_CARD_TEXT}
            >
                {text}
            </Text>
        </CardBody>
    </Card>
);
