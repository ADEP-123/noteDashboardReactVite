import styles from "./Post.module.css";
import { Link } from "react-router-dom";

export default function Post(props) {
  props.author;
  props.text;
  return (
    <li className={styles.post}>
      <Link to={props.id}>
        <p className={styles.author}>{props.author}</p>
        <p className={styles.text}>{props.text}</p>
      </Link>
    </li>
  );
}
