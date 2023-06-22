import { CciCentre } from "./CciCentre"
import { CciFactory } from "./CciFactory"
import { BitsBaleVariety } from "./BitsBaleVariety"
export interface BaleLot{

    lotDetailsId: number;
    buyerName: string;
    centreId: CciCentre;
    cropYear: string;
    factoryId: CciFactory;
    heapNo: number;
    heapDate: string;
    lotNo: number;
    operationName: string;
    pressMachineNo: string;
    pressMarkNo: string;
    pressRunningFrom: number;
    pressRunningTo: number;
    soldDate: string;
    status: string;
    statusUpdatedBy: {};
    varietyId: BitsBaleVariety;
    buyerNo: number;
    statusUpdateTimestamp : string;
}
