import styles from "./ModalTemplate.module.css";

interface IModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: IModalProps) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.childContainer}>{children}</div>
    </div>
  );
};

export default Modal;
