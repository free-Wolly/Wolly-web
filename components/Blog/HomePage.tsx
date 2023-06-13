import { SingleBlogDataInterface } from "../../types/blog/interfaces";
import Loading from "../Helpers/Loading";
import Container from "./helper/Container";
import PostList from "./PostList";

const HomePage = ({
  posts,
  loading,
}: {
  posts: SingleBlogDataInterface[];
  loading: boolean;
}) => {
  if (loading) return <Loading />;
  return (
    <>
      {posts && (
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 mt-[4rem]">
            {posts.slice(0, 2).map((post: SingleBlogDataInterface) => (
              <PostList key={post?.id} post={post} aspect="landscape" />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(2, 11).map((post) => (
              <PostList key={post.id} post={post} aspect="square" />
            ))}
          </div>
        </Container>
      )}
    </>
  );
};

export default HomePage;
