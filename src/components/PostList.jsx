import Post from "./Post";
import styles from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState, useEffect } from "react";

export default function PostList(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    const [posts, setPosts] = useState([]);
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setposts(existingPosts => [postData, ...existingPosts]);
  }

  return (
    <>
      {props.isPosting ? (
        <Modal onClose={props.onStopPosting}>
          <NewPost onCancel={props.onStopPosting} onAdd={addPostHandler} />
        </Modal>
      ) : null}
      {posts.length != 0 ? (
        <ul className={styles.posts}>
          {posts.map(post => (
            <Post key={post.body} author={post.author} text={post.body} />
          ))}
        </ul>
      ) : null}
      {posts.length === 0 ? (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some! </p>
        </div>
      ) : null}
    </>
  );
}
