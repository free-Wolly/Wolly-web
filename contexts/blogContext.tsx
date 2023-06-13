import { createContext, useState } from "react";

// interface BlogPostType {
//   attributes: {
//     Body: string;
//     createdAt: string;
//     publishedAt: string;
//     updatedAt: string;
//   };
//   id: number;
// }

// type BlogPostsContextType = {
//   blogPosts: BlogPostType[]; // Define the BlogPostType as per your data
//   setBlogPosts: (posts: BlogPostType[]) => void;
// };

export const BlogPostsContext = createContext<any>({
  blogPosts: [],
  setBlogPosts: () => {},
});

export const BlogPostsProvider = ({ children }: { children: JSX.Element }) => {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);

  return (
    <BlogPostsContext.Provider value={{ blogPosts, setBlogPosts }}>
      {children}
    </BlogPostsContext.Provider>
  );
};
