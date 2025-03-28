import Post from "./Post";
import styles from "./PostList.module.css";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function PostList() {
  const posts = useLoaderData();
  return (
    <>
      {posts.length != 0 ? (
        <ul className={styles.posts}>
          {posts.map(post => (
            <Post key={post.id} id={post.id} author={post.author} text={post.body} />
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
