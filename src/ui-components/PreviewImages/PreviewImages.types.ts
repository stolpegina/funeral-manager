import { CompanyPhoto } from "../../types/company";

export interface PreviewImagesProps {
  images: CompanyPhoto[];
  onRemove: (name: string) => void;
}
