import Link from "next/link";
import Image from "next/image";
import { classNames } from "../../utils/classNames";
import CategoryLabel from "./helper/CategoryLabel";
import { format, parseISO } from "date-fns";

export default function PostList({
  post,
  minimal,
  aspect,
  fontSize,
  fontWeight,
}: any) {
  const postUrl = post ? `/blog/post/${post.id}` : "/blog/post/1";

  return (
    <>
      <div
        className={classNames(
          "group cursor-pointer",
          minimal && "grid gap-10 md:grid-cols-2"
        )}
      >
        <div
          className={classNames(
            " overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800"
          )}
        >
          <Link
            className={classNames(
              "relative block",
              aspect === "landscape"
                ? "aspect-video"
                : aspect === "custom"
                ? "aspect-[5/4]"
                : "aspect-square"
            )}
            href={postUrl}
          >
            <Image
              src={
                "https://images.unsplash.com/photo-1685630247483-ac3c7626b0cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
              }
              className="object-cover transition-all"
              fill
              priority
              sizes="(max-width: 768px) 30vw, 33vw"
              alt={"Thumbnail"}
            />
          </Link>
        </div>

        <div className={classNames(minimal && "flex items-center")}>
          <div>
            <CategoryLabel categories={post.categories} nomargin={minimal} />
            <h2
              className={classNames(
                fontSize === "large"
                  ? "text-2xl"
                  : minimal
                  ? "text-3xl"
                  : "text-lg",
                fontWeight === "normal"
                  ? "line-clamp-2 font-medium  tracking-normal text-black"
                  : "font-semibold leading-snug tracking-tight",
                "mt-2    dark:text-white"
              )}
            >
              <Link href={`/post/`}>
                <span
                  className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px]
          group-hover:bg-[length:100%_10px]
          dark:from-purple-800 dark:to-purple-900"
                >
                  {"Post Title"}
                </span>
              </Link>
            </h2>

            <div className="hidden">
              {post.excerpt && (
                <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                  <Link href={`/post/`} legacyBehavior>
                    {post.excerpt}
                  </Link>
                </p>
              )}
            </div>

            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-3">
                <div className="relative h-5 w-5 flex-shrink-0">
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    }
                    alt={"Author"}
                    className="rounded-full object-cover"
                    fill
                    sizes="20px"
                  />
                </div>
                <span className="truncate text-sm">{"authorName"}</span>
              </div>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                &bull;
              </span>
              <time
                className="truncate text-sm"
                dateTime={
                  post?.attributes.publishedAt || post.attributes.createdAt
                }
              >
                {format(
                  parseISO(
                    post?.attributes.publishedAt || post.attributes.createdAt
                  ),
                  "MMMM dd, yyyy"
                )}
              </time>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
