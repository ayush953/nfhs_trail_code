import { BaleLot } from "./BaleLot";
import { UbinMst } from "./UbinMst";

export interface BaleDetails{
    ubin : string;
    lotDetails : BaleLot;
    baleNo : number;
    moisture : number;
    balePressDate : string;
    balePressWeight : number;
    status : string;
    pressRunningNo : string;
    micronaireValue : number;
    stappleLength : number;
    isSampled : boolean;
    isApproved : boolean;
    approvedTimestamp : string;
    approvedBy : {};
    isRevertedBack : boolean;
    revertedTimestamp : string;
    revertedBy : {};
    revertedRemark : string;
    revertedUserRole : {};
    supportingDocument : {};
    statusUpdatedBy : {};
    statusUpdatedTimestamp : string;
}