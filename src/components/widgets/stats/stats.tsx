import { Flex } from '@chakra-ui/react';

import { StatItem } from '~/components';
import { STATS } from '~/components/widgets/stats/const.ts';
import { BookmarkIcon } from '~/icons/counter-icons/bookmark-icon';
import { FriendsIcon } from '~/icons/counter-icons/friends-icon';
import { ReactionIcon } from '~/icons/counter-icons/reaction-icon';

const icons = [
    <BookmarkIcon w={{ base: 3, sm: 4 }} h={{ base: 3, sm: 4 }} />,
    <FriendsIcon w={{ base: 3, sm: 4 }} h={{ base: 3, sm: 4 }} />,
    <ReactionIcon w={{ base: 3, sm: 4 }} h={{ base: 3, sm: 4 }} />,
];

export const Stats = () => (
    <Flex
        pl={{ base: 2, sm: 0 }}
        pr={{ base: 2, sm: 0 }}
        pt={{ base: 0, sm: 4 }}
        pb={{ base: 0, sm: 4 }}
        flexDirection={{ base: 'row', md: 'column' }}
        gap={{ base: 2, sm: 6 }}
    >
        {STATS.map((item, i) => (
            <StatItem key={i} icon={icons[i]} value={item} />
        ))}
    </Flex>
);
