import Post from "./Post";
import styles from "./PostList.module.css";
import NewPost from "./NewPost";

export default function PostList() {
  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        <Post author="Andres" text="text example" />
        <Post author="Camilo" text="text example" />
      </ul>
    </>
  );
}
