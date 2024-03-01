import { EntryData } from "./EntryDataInterface"

export interface PurchaseProps {
    data: {[key: string]: EntryData[]},
    calcFunc: (amount: number) => number
}