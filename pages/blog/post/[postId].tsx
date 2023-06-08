import Link from "next/link";
import Image from "next/image";
import CategoryLabel from "../../../components/Blog/helper/CategoryLabel";
import Container from "../../../components/Blog/helper/Container";
import { format, parseISO } from "date-fns";
import { fetchAPI } from "..";

export default function Post({ post, postId }: { post: any; postId: string }) {
  const currentPost = post.find((post: any) => {
    return post?.id.toString() === postId ? post : null;
  });

  return (
    <>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md ">
          <div className="flex justify-center">
            {/* <CategoryLabel categories={post.categories} /> */}
            category
          </div>

          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {/* {post.title} */}
            Post Title
          </h1>

          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  }
                  alt={"Author"}
                  className="rounded-full object-cover"
                  fill
                  sizes="40px"
                />
                image
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-400">
                  {/* {post.author.name} */}
                  author
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <time
                    className="text-gray-500 dark:text-gray-400"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        <Image
          src={
            "https://images.unsplash.com/photo-1685630247483-ac3c7626b0cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
          }
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
          <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
            {currentPost ? currentPost?.attributes?.Body : "Post Body"}
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/blog"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 "
            >
              ← View all posts
            </Link>
          </div>
          Author
        </article>
      </Container>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const postId = context.params.postId;
  const post = await fetchAPI();

  return {
    props: {
      postId,
      post: post.data,
    },
  };
}
