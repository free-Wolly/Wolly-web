import Image from "next/image";
import CategoryLabel from "../../components/Blog/helper/CategoryLabel";
import Container from "../../components/Blog/helper/Container";
import { format, parseISO } from "date-fns";
import { useQuery } from "react-query";
import request from "graphql-request";
import blogsQuery from "../../graphql/query/blog/blogs";
import { useContext, useEffect, useState } from "react";
import Loading from "../../components/Helpers/Loading";
import ReactMarkdown from "react-markdown";
import { endpoint, header } from "./constants";
import { BlogPostsContext } from "../../contexts/blogContext";
import { useRouter } from "next/router";
import Footer from "../../components/PageFooter";
import Header from "../../components/PageHeader";
import { useLanguage } from "../../components/language";
import {
  BlogsDataInterface,
  SingleBlogDataInterface,
} from "../../types/blog/interfaces";
import { readingTime } from "../../utils/readTime";

export default function Post({ slug }: { slug: string }) {
  const { locale, setLocale, messages } = useLanguage();
  const router = useRouter();
  const [posts, setPosts] = useState<SingleBlogDataInterface[]>([]);
  const { blogPosts } = useContext(BlogPostsContext);

  useEffect(() => {
    if (Object.keys(blogPosts).length > 0) {
      setPosts(blogPosts);
    }
  }, [blogPosts]);

  useQuery(
    "Blogs" + slug,
    () =>
      request(
        endpoint,
        blogsQuery,
        {
          filters: {
            slug: {
              eq: slug,
            },
          },
        },
        header
      ),
    {
      enabled: blogPosts.length === 0,
      onSuccess: (data: BlogsDataInterface) => {
        setPosts(data?.blogs.data);
      },
    }
  );

  const currentPost: SingleBlogDataInterface | undefined = Object.keys(posts)
    .map((key: any) => {
      return posts[key];
    })
    .flat()
    .find((obj: SingleBlogDataInterface) => obj.attributes.slug === slug);

  if (!currentPost) return <Loading />;
  return (
    <div className="min-h-screen">
      <Header
        locale={locale}
        setLocale={setLocale}
        messages={messages}
        blackText
      />

      <Container className="mt-[4rem]">
        <div className="mx-auto max-w-screen-md ">
          <div className="flex justify-center">
            <CategoryLabel
              categories={
                currentPost?.attributes.categories.data?.length !== 0
                  ? currentPost?.attributes.categories.data
                  : null
              }
            />
          </div>

          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug">
            {currentPost?.attributes.title}
          </h1>

          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                <Image
                  src={
                    currentPost?.attributes.author.data
                      ? `https://king-prawn-app-uouyq.ondigitalocean.app${currentPost?.attributes.author.data.attributes.image.data.attributes.url}`
                      : "/assets/images/wolly.png"
                  }
                  alt={"Author"}
                  className="rounded-full object-cover"
                  fill
                  sizes="40px"
                />
              </div>
              <div>
                <p className="text-gray-800 font-bold">
                  {currentPost?.attributes.author.data
                    ? currentPost?.attributes.author.data.attributes.fullName
                    : "Unknown Author"}
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <time
                    className="text-gray-500"
                    dateTime={
                      currentPost?.attributes.publishedAt ||
                      currentPost?.attributes.createdAt
                    }
                  >
                    {format(
                      parseISO(
                        currentPost?.attributes.publishedAt ||
                          currentPost?.attributes.createdAt
                      ),
                      "MMMM dd, yyyy"
                    )}
                  </time>
                  <div>
                    · {readingTime(currentPost?.attributes?.content) + " "} min
                    read
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        <Image
          src={`https://king-prawn-app-uouyq.ondigitalocean.app${currentPost?.attributes.cover.data.attributes.url}`}
          alt={"Thumbnail"}
          priority
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover object-center"
          sizes="100vw"
          width={1920}
          height={1080}
        />
      </div>

      <Container>
        <article className="mx-auto max-w-screen-md ">
          <div className="prose mx-auto my-3 prose-a:text-blue-600">
            {currentPost ? (
              <ReactMarkdown>{currentPost?.attributes?.content}</ReactMarkdown>
            ) : (
              "Post Body"
            )}
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <div
              onClick={() => router.back()}
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 cursor-pointer hover:bg-brand-secondary/10 transition duration-200 ease-in-out"
            >
              ← ნახე ყველა პოსტი
            </div>
          </div>
        </article>
      </Container>
      <Footer messages={messages} />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const slug = context.params.slug;
  return {
    props: {
      slug,
    },
  };
}
