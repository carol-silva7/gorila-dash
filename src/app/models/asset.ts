export interface Asset {
id:string;
issueDate: Date; 
symbol:string,
productType: string
paymentCurrency: string,
pricingMethod: string,
displayName: string,
specificData: {
  isin:string,
}
}