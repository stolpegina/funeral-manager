import { CompanyPhoto } from "../../../../types/company";

export interface PhotosProps {
    images: CompanyPhoto[];
    onUpload: (files: File[]) => void;
    onRemove: (filename: string) => void;
}
