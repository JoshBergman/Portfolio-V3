import styles from "./Timeline.module.css";
interface IFullItemDescProps {
  info: {
    title: string;
    desc: React.ReactNode;
    date: string;
  };
}

const FullItemDesc = ({ info }: IFullItemDescProps) => {
  return (
    <div>
      <h5 className={styles.descTitle}>{info.title}</h5>
      <h6 className={styles.descDate}>{info.date}</h6>
      <p className={styles.descDesc}>{info.desc}</p>
    </div>
  );
};

export default FullItemDesc;
