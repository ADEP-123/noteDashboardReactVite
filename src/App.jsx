import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalVisible() {
    setModalIsVisible(true);
  }

  function hideModalVisible() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalVisible} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalVisible} />
      </main>
    </>
  );
}

export default App;
