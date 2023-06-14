interface Category {
  attributes: {
    name: string;
    textColor: string;
  };
}

interface Tag {
  attributes: {
    name: string;
  };
}

export interface SingleBlogDataInterface {
  attributes: {
    author: {
      data?: {
        attributes: {
          fullName: string;
          image: {
            data: {
              attributes: {
                url: string;
              };
            };
          };
        };
      };
    };
    categories: {
      data?: Category[];
    };
    content: string;
    cover: {
      data: {
        attributes: {
          url: string;
        };
        id: string;
      };
    };
    createdAt: string;
    publishedAt: string;
    slug: string;
    tags: {
      data?: Tag[];
    };
    title: string;
    updatedAt: string;
  };
  id: string;
}

export interface BlogsDataInterface {
  blogs: {
    data: SingleBlogDataInterface[];
    meta: {
      pagination: {
        total: number;
        page: number;
        pageCount: number;
        pageSize: number;
      };
    };
  };
}

export interface BlogPostsContextInterface {
  [key: number]: SingleBlogDataInterface[];
}
