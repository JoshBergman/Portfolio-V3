import React, { useState } from "react";

import styles from "./Timeline.module.css";

interface IItemTitleProps {
  title: string;
}

const ItemTitle = ({ title }: IItemTitleProps) => {
  const [tailAnimationState, setTailAnimationState] = useState(0);
  const [titleDivAnimationState, setDivAnimationState] = useState(0);

  setTimeout(() => {
    setTailAnimationState(50);
  }, 20);

  setTimeout(() => {
    setDivAnimationState(100);
  }, 320);

  const tailYAnimate = tailAnimationState * -1;
  const tailStyle = {
    height: tailAnimationState,
    transform: "translateY(" + (tailYAnimate - -24) + "px)",
  }; //only god knows why (tailYAnimate - -24) works and (tailYAnimate + 24) doesnt...

  const titleStyle = {
    opacity: titleDivAnimationState,
  };

  return (
    <div className={styles.titleContainer}>
      <div className={styles.itemTitle} style={titleStyle}>
        {title}
      </div>
      <div className={styles.tail} style={tailStyle} />
    </div>
  );
};

export default ItemTitle;
