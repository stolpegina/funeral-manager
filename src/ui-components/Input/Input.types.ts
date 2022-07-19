import { ChangeEvent } from "react";

export interface InputProps {
  text: string;
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
