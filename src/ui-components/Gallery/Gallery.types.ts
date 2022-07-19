import { CompanyPhoto } from "../../types/company";

export interface GalleryProps {
  images: CompanyPhoto[];
  onRemove: (name: string) => void;
}
