import { useState } from "react";
import Modal from "../components/modal/Modal";

const IndexPage = () => {
  const [modal, setModal] = useState(false);
  const agregarModal = () => {
    setModal(true);
  };
  return (
    <>
      <button onClick={agregarModal}>Mostrar Modal</button>
      {modal && <Modal setModal={setModal} />}
    </>
  );
}

export default IndexPage;