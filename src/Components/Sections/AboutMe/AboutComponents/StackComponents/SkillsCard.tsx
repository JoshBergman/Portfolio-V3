import styles from "./Skills.module.css";

interface ISkillsCardProps {
  children: React.ReactNode;
}

const SkillsCard = ({ children }: ISkillsCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default SkillsCard;
