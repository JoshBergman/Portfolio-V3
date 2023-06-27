import React, { useState } from "react";
import { IconType } from "react-icons";

import styles from "./ContactComponents.module.css";
import contactInfo from "../../../../../Info/ContactInfo";
import ContactTooltip from "./ContactTooltip";

interface IContactButtonProps {
  Icon: IconType;
  contact: string;
  modifySize?: number;
}

const ContactButton = ({ Icon, contact, modifySize }: IContactButtonProps) => {
  const [tooltipState, setTooltipState] = useState(false);

  const thisContact = contactInfo[contact];
  const username = thisContact.text;
  const link = thisContact.link;

  const baseIconSize = 34;
  let finalIconSize = baseIconSize;

  if (modifySize) {
    finalIconSize += modifySize;
  }

  const toggleTooltip = () => {
    setTooltipState((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <a
        className={styles.iconA}
        onMouseEnter={toggleTooltip}
        onMouseLeave={toggleTooltip}
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{
          fontSize: finalIconSize + "px",
        }}
      >
        <Icon className="icon" />
      </a>
      {tooltipState && (
        <ContactTooltip platform={contact} username={username} />
      )}
    </React.Fragment>
  );
};

export default ContactButton;
