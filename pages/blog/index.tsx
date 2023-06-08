import { useContext, useEffect, useState } from "react";
import HomePage from "../../components/Blog/HomePage";
import { BlogPostsContext } from "../../contexts/blogContext";

export async function fetchAPI() {
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " +
        "e2e5f567163ec1f8bfad365a1ccfef6d3a19a3148a87f5213823d796be1961ec96be8eb006e29d73050f938712e48ceeef41bce23e8cc5fc67ddb16a842d4f2e3fabfa4b4fab63d5e77aa023f4b055713bdedc42e95bd6789370ea18ad092daf5898328960289ffbdd3145308f00d0efed763535da6af20dcbbe6da59faf3c50",
    },
  };

  // Build request URL
  //   const queryString = qs.stringify(urlParamsObject);
  const requestUrl =
    "https://king-prawn-app-uouyq.ondigitalocean.app/api/blogs";

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
}

export default function Blog() {
  const [loading, setLoading] = useState(true);
  const { blogPosts, setBlogPosts } = useContext(BlogPostsContext);
  useEffect(() => {
    const fetchData = async () => {
      if (blogPosts.length === 0) {
        const data = await fetchAPI();
        const dataArr: any = Array(11).fill(data.data[0]);
        setBlogPosts(dataArr);
      }
      setLoading(false);
    };
    fetchData();
  }, [blogPosts.length, setBlogPosts]);

  return <HomePage posts={blogPosts} loading={loading} />;
}
