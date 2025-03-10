import { useState } from "react";
import Post from "./Post";
import styles from "./PostList.module.css";
import NewPost from "./NewPost";

export default function PostList() {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value)
    }

    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value)
    }

  return (
    <>
      <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
      <ul className={styles.posts}>
        <Post author={enteredAuthor} text={enteredBody} />
        <Post author="Camilo" text="text example" />
      </ul>
    </>
  );
}
