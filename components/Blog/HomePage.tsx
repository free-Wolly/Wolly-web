import Link from "next/link";
import Container from "./helper/Container";
import PostList from "./PostList";

interface PostInterface {
  attributes: {
    Body: string;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
  id: number;
}

const HomePage = ({
  posts,
  loading,
}: {
  posts: PostInterface[];
  loading: boolean;
}) => {
  return (
    <>
      {!loading ? (
        posts && (
          <Container>
            <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
              {posts.slice(0, 2).map((post) => (
                <PostList key={post.id} post={post} aspect="landscape" />
              ))}
            </div>
            <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
              {posts.slice(2, 14).map((post) => (
                <PostList key={post.id} post={post} aspect="square" />
              ))}
            </div>
          </Container>
        )
      ) : (
        <div className="flex justify-center items-center h-screen">
          <svg
            className="animate-spin -ml-1 mr-3 h-10 w-10 text-wollyBlue"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
        </div>
      )}
    </>
  );
};

export default HomePage;
