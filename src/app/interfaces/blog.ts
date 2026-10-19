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
    seoTitle?: string;
    metaDescription?: string;
    slug?: string;
    site?: string;
    BlogSections?: BlogSection[];
    readingTime?: number;
    wordCount?: number;
    Tags?: { id: number; name: string }[];
}

export interface BlogSection {
    id: number;
    blogId: number;
    subtitle: string;
    body: string;
    image: string;
    order_index: number;
}
