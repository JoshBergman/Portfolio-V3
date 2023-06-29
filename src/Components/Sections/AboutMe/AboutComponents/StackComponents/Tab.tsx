import styles from "./Skills.module.css";

interface ITabProps {
  tabName: string;
  tabIndex: number;
  infoState: number;
  updateInfoState: (newIndex: number) => void;
}

const Tab = ({ tabName, tabIndex, infoState, updateInfoState }: ITabProps) => {
  const tabClickHandler = () => {
    updateInfoState(tabIndex);
  };

  return (
    <button
      className={styles.tab}
      onClick={tabClickHandler}
      style={
        tabIndex === infoState
          ? {
              borderColor: "var(--brandPrimary-color)",
            }
          : {}
      }
    >
      {tabName}
    </button>
  );
};

export default Tab;
