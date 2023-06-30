import styles from "./Contact.module.css";

interface IPlugProps {
  btn: React.ReactNode;
  userName: string;
  children: React.ReactNode;
  link: string;
  btnMove?: string;
}

const Plug = ({ btn, userName, children, link, btnMove }: IPlugProps) => {
  const btnStyle = {
    transform: "translate(" + btnMove + ")",
  };

  return (
    <div className={styles.plugDiv}>
      <div className={styles.btnContainer} style={btnStyle}>
        {btn}
      </div>
      <a
        className={styles.plugLink}
        href={link}
        rel="noreferrer"
        target="_blank"
      >
        {children}: <strong className={styles.plugStrong}>{userName}</strong>
      </a>
    </div>
  );
};

export default Plug;
