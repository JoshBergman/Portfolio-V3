import styles from "./Project.module.css";

interface ITechStackItemProps {
  tech: string;
}

const TechStackItem = ({ tech }: ITechStackItemProps) => {
  return <div className={styles.techStackItem}>{tech}</div>;
};

export default TechStackItem;
