export interface Company {
  id: string;
  contactId: string;
  name: string;
  shortName: string;
  businessEntity: string;
  contract: {
    no: string;
    issue_date: string;
  };
  type: CompanyType[];
  status: CompanyStatus;
  photos: CompanyPhoto[];
}

export interface CompanyPhoto {
  name: string;
  filepath: string;
  thumbpath: string;
}

export enum CompanyType {
  Agent = "agent",
  Contractor = "contractor",
}

export enum CompanyStatus {
  Active = 'active'
}
