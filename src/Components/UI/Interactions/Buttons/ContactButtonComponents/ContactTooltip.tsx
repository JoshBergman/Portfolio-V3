import styles from "./ContactComponents.module.css";

interface IContactTooltipsProps {
  platform: string;
  username: string;
}

const ContactTooltip = ({ platform, username }: IContactTooltipsProps) => {
  return (
    <div className={styles.tooltip}>
      {platform}: {username}
    </div>
  );
};

export default ContactTooltip;
