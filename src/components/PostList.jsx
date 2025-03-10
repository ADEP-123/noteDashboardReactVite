import { useState } from "react";
import Post from "./Post";
import styles from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

export default function PostList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function hideModalVisible() {
    setModalIsVisible(false);
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {modalIsVisible ? (
        <Modal onClose={hideModalVisible}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      ) : null}
      <ul className={styles.posts}>
        <Post author={enteredAuthor} text={enteredBody} />
        <Post author="Camilo" text="text example" />
      </ul>
    </>
  );
}
