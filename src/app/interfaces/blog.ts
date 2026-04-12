export interface Blog {
    id: number;
    idBlog?: string; // Legacy support
    catBlog: string;
    titleBlog: string;
    subtitleBlog: string;
    image: string;
    thumbnail: string;
    createdAt: string;
    updatedAt: string;
    BlogSections?: BlogSection[];
}

export interface BlogSection {
    id: number;
    blogId: number;
    subtitle: string;
    body: string;
    image: string;
    order_index: number;
}
