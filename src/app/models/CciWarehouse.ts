import { CciBranch } from "./CciBranch";

export interface CciWarehouse{
    warehouseId :number;
    warehouseName : string;
    branchId : CciBranch
}