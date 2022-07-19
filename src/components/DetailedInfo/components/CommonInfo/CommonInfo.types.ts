import { Company } from "../../../../types/company";

export interface CommonInfoProps {
  data: Company;
  onChange: (field: string, value: unknown) => void;
  onSave: () => void;
}
