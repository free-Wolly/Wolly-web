import { useContext, useState } from "react";
import HomePage from "../../components/Blog/HomePage";
import { BlogPostsContext } from "../../contexts/blogContext";
import { useQuery } from "react-query";
import request from "graphql-request";
import blogsQuery from "../../graphql/query/blog/blogs";
import { endpoint, header } from "../../constants/blog/constants";
import Header from "../../components/PageHeader";
import Footer from "../../components/PageFooter";
import { useLanguage } from "../../components/language";
import Pagination from "../../components/Blog/Pagination";
import { safeParseInt } from "../../utils/safeParseInt";
import {
  BlogPostsContextInterface,
  BlogsDataInterface,
} from "../../types/blog/interfaces";

const PAGE_SIZE = 11;

export default function Blog({ currentPage }: { currentPage: string }) {
  const { blogPosts, setBlogPosts } = useContext(BlogPostsContext);
  const [page, setPage] = useState(safeParseInt(currentPage) as number);
  const { locale, setLocale, messages } = useLanguage();

  const { data, isLoading } = useQuery(
    "Blogs",
    () =>
      request(
        endpoint,
        blogsQuery,
        {
          pagination: {
            page,
            pageSize: PAGE_SIZE,
          },
          sort: ["createdAt:desc"],
        },
        header
      ),
    {
      enabled: !blogPosts[page],
      onSuccess: (data: BlogsDataInterface) => {
        setBlogPosts((prevBlogPosts: BlogPostsContextInterface) => ({
          ...(prevBlogPosts || {}),
          [page]: data?.blogs.data,
        }));
      },
    }
  );

  return (
    <>
      <Header
        locale={locale}
        setLocale={setLocale}
        messages={messages}
        blackText
      />
      <div className="min-h-[calc(100vh-104px)] flex flex-col justify-between">
        <HomePage
          messages={messages}
          posts={
            Object.keys(blogPosts).length !== 0 ? blogPosts[page] || [] : []
          }
          loading={isLoading}
        />
        <Pagination data={data} page={page} setPage={setPage} />
      </div>
      <Footer messages={messages} />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const currentPage = context.query.page || "1";

  return {
    props: {
      currentPage,
    },
  };
}