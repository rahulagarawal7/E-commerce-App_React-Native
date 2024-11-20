export  interface PaginationTypes{
    page:string
    limit:string
}
export interface ProductTypes{
        id?: number;
        title?: string;
        image?: string;
        price?: number;
        description?: string;
        brand?: string;
        model?: string;
        color?: string;
        category?: string;
        popular?: boolean;
        discount?: number;
      }
      

   export interface GetProductsResponseTypes{
         status:string
        message:string
        products:ProductTypes[]
       
     }
     export interface SuccessResponse<T>{
        isSuccessful:boolean
            statusCode:number
            data:T
    }
    
    export interface ErrorResponse  {
        isSuccessful:boolean
        message:string 
        statusCode:number | string
    }
    
    export type  ApiResponse<T> =SuccessResponse<T> | ErrorResponse
    
    export interface ErrorResponseData{
        error?:string
    }

 