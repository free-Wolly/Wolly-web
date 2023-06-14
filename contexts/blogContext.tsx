import { createContext, useState } from "react";

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
