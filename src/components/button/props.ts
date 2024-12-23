import { CSSProperties } from "react";
import { ButtonType } from "../enums/ButtonType";

export interface IButtonProps {
  text: string;
  type: ButtonType;
  icon?: string;
  url?: string;
  style?: CSSProperties;
}