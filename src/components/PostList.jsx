import Post from "./Post";
import styles from "./PostList.module.css"

export default function PostList() {
  return (
    <ul className={styles.posts}>
      <Post author="Andres" text="text example" />
      <Post author="Camilo" text="text example" />
    </ul>
  );
}
