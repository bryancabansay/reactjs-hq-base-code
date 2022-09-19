import React from "react";
import { translate } from "../../i18n";
import { ButtonProps } from "./button.props";

const Button = (props: ButtonProps) => {
  const { className, type, onClick, text, tx, children } = props;

  // Figure out what to use
  const i18nText = tx && translate(tx);
  const content = i18nText || text || children;

  return (
    <button className={className} type={type} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
