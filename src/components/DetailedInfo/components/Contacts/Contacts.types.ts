import { Contact } from "../../../../types/contact";

export interface ContactsProps {
  data: Contact;
  onChange: (field: string, value: unknown) => void;
  onSave: () => void;
}
