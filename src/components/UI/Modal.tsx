import React from "react";
import ReactDom from "react-dom";
import styles from "../../styles/Modal.module.scss";

const Backdrop = (props: any) => {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlay = (props: any) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays")!;

const Modal = (props: any) => {
  return (
    <>
      {ReactDom.createPortal(<Backdrop />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
