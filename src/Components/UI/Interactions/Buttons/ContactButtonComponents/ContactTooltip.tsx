import { useState } from "react";

import styles from "./ContactComponents.module.css";

interface IContactTooltipsProps {
  platform: string;
  username: string;
}

const ContactTooltip = ({ platform, username }: IContactTooltipsProps) => {
  const [opacityState, setOpacityState] = useState(0);
  setTimeout(() => {
    setOpacityState(100);
  }, 350);
  return (
    <div className={styles.tooltip} style={{ opacity: opacityState }}>
      {platform}: {username}
    </div>
  );
};

export default ContactTooltip;
