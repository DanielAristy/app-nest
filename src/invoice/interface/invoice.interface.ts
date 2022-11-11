import { InvoiceDetail } from "./invoice-detail.interface";

export interface Invoice {
    id?: string;
    customerId?: string;
    nit: string;
    products: InvoiceDetail[];
}