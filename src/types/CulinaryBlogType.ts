export type CulinaryBlogItemPropsType = {
    avatar: string;
    name: string;
    login: string;
    text: string;
};

export type CulinaryBlogsDataType = CulinaryBlogItemPropsType & {
    id: number;
};
