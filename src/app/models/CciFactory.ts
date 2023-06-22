import { CciCentre } from "./CciCentre";

export interface CciFactory {
    factoryId :number;
    centreId :CciCentre;
    processingFactoryName : string;
    factoryCode :number;
}