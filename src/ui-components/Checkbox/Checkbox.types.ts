import { ChangeEvent } from "react";

export interface CheckboxProps {
  name: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
