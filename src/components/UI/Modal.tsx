import React from "react";
import ReactDom from "react-dom";
import styles from "../../styles/Modal.module.scss";

interface BackdropPropTypes {
  onClose: () => void;
}

interface ModalPropTypes {
  onClose: () => void;
  children: React.ReactNode;
}

interface ModalOverlayProps {
  children: React.ReactNode;
}

const Backdrop = ({ onClose }: BackdropPropTypes) => {
  return <div className={styles.backdrop} onClick={onClose}></div>;
};

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays")!;

const Modal = ({ onClose, children }: ModalPropTypes) => {
  return (
    <>
      {ReactDom.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
