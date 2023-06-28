import styles from "./SectionHeading.module.css";

interface ISectionHeadingProps {
  children: React.ReactNode;
  offWhite: boolean;
}

const SectionHeading = ({ children, offWhite }: ISectionHeadingProps) => {
  const thisColor = offWhite ? "var(--brandPrimary-color)" : "white";
  return (
    <h3 className={styles.heading} style={{ color: thisColor }}>
      {children}
    </h3>
  );
};

export default SectionHeading;
