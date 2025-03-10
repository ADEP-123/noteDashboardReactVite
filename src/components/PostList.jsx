import Post from "./Post";
import styles from "./PostList.module.css";
import { useState, useEffect } from "react";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts(existingPosts => [postData, ...existingPosts]);
  }

  return (
    <>
      {!isFetching && posts.length != 0 ? (
        <ul className={styles.posts}>
          {posts.map(post => (
            <Post key={post.body} author={post.author} text={post.body} />
          ))}
        </ul>
      ) : null}
      {!isFetching && posts.length === 0 ? (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some! </p>
        </div>
      ) : null}
      {isFetching ? (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading Posts...</p>
        </div>
      ) : null}
    </>
  );
}
