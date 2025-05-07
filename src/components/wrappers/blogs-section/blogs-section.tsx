import { Flex } from '@chakra-ui/icons';

import { BlogCard } from '~/components';
import { Blog } from '~/types/blog-type';

type BlogsSectionProps = {
    blogs: Blog[];
};

export const BlogsSection = ({ blogs }: BlogsSectionProps) => (
    <Flex
        maxW='100%'
        gap={4}
        px={{ base: 3, md: 6 }}
        justifyContent='space-between'
        flexDirection={{ base: 'column', sm: 'row' }}
    >
        {blogs.map(({ name, username, image, description }) => (
            <BlogCard
                key={name + username}
                name={name}
                username={username}
                image={image}
                description={description}
            />
        ))}
    </Flex>
);
