import Link from "next/link";
import Image from "next/image";
import { classNames } from "../../utils/classNames";
import CategoryLabel from "./helper/CategoryLabel";
import { format, parseISO } from "date-fns";
import { SingleBlogDataInterface } from "../../types/blog/interfaces";
import { readingTime } from "../../utils/readTime";

export default function PostList({
  post,
  aspect,
}: {
  post: SingleBlogDataInterface;
  aspect: string;
}) {
  const postUrl = post ? `/blog/${post.attributes.slug}` : "/";

  return (
    <>
      <div className={"group cursor-pointer"}>
        <div
          className={
            "overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105"
          }
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
              src={`https://king-prawn-app-uouyq.ondigitalocean.app${post?.attributes.cover.data.attributes.url}`}
              className="object-cover transition-all"
              fill
              sizes="(max-width: 768px) 30vw, 33vw"
              alt={"Thumbnail"}
            />
          </Link>
        </div>

        <div>
          <div>
            {post?.attributes.categories.data === undefined ||
            post?.attributes.categories.data.length === 0 ? null : (
              <CategoryLabel categories={post?.attributes.categories.data} />
            )}

            <h2
              className={
                "text-lg font-semibold leading-snug tracking-tight mt-2"
              }
            >
              <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                {post.attributes.title}
              </span>
            </h2>
            <div className="mt-3 flex items-center space-x-3 text-gray-500">
              <div className="flex items-center gap-3 text-sm">
                წაკითხვის დრო {readingTime(post?.attributes?.content)} წუთი
              </div>
              <span className="text-xs text-gray-300 ">&bull;</span>
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
