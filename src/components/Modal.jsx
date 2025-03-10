import styles from "./Modal.module.css";

export default function Modal(props) {
  return (
    <>
      <div className={styles.backdrop} />
      <dialog openm={true} className={styles.modal}>{props.children}</dialog>
    </>
  );
}
