export interface Event {
   eventType:string,
    sourceSecurity: {
          productType: string,
          symbol: string,
        },
        fixingDate: Date,
        relativeTo: {
          year: number,
          period: string,
        }
}




