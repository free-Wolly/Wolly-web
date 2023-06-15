import { SingleBlogDataInterface } from "../../types/blog/interfaces";
import Loading from "../Helpers/Loading";
import Container from "./helper/Container";
import PostList from "./PostList";

const HomePage = ({
  posts,
  loading,
  messages,
}: {
  posts: SingleBlogDataInterface[];
  loading: boolean;
  messages: any;
}) => {
  if (loading) return <Loading />;
  return (
    <>
      {posts && posts.length > 1 ? (
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 mt-[4rem]">
            {posts.slice(0, 2).map((post: SingleBlogDataInterface) => (
              <PostList
                messages={messages}
                key={post?.id}
                post={post}
                aspect="landscape"
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(2, 11).map((post: SingleBlogDataInterface) => (
              <PostList
                messages={messages}
                key={post.id}
                post={post}
                aspect="square"
              />
            ))}
          </div>
        </Container>
      ) : (
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 mt-[4rem]">
            {posts.map((post: SingleBlogDataInterface) => (
              <PostList
                messages={messages}
                key={post?.id}
                post={post}
                aspect="landscape"
              />
            ))}
          </div>
        </Container>
      )}
    </>
  );
};

export default HomePage;
