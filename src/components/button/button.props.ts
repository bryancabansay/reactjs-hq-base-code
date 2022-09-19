import { TxKeyPath } from "../../i18n";

type ButtonTypes = "submit" | "reset" | "button" | undefined;

export interface ButtonProps {
  /**
   * React Node
   */
  children?: React.ReactNode;

  /**
   * Class name for css purpose
   */
  className?: string;

  /**
   * Expected button type
   */
  type: ButtonTypes;
  onClick: () => void;
  text: string;
  tx?: TxKeyPath;
}
