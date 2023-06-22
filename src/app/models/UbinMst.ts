import { CciBranch } from "./CciBranch";

export interface UbinMst{
    ubin : string;
    generatingBranchId : CciBranch;
    generatedBy : {};
    generatedTimestamp :string;
    status : string;
    generatedForBranchId : CciBranch; 
   
}