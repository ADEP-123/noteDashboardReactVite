import styles from "./Post.module.css"

export default function Post(props) {
  props.author;
  props.text;
  return (
    <div className={styles.post}>
      <p className={styles.author}>{props.author}</p>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
}
