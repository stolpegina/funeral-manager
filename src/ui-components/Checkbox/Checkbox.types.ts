import { ChangeEvent } from "react";

export interface CheckboxProps {
  name: string;
  label: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
