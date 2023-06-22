import { CciBranch } from "./CciBranch";

export interface CciCentre {
    centreId :number;
    centreName : string;
    centreCode :string;
    branchId : CciBranch;
}