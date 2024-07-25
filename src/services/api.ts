import axios from "axios"

import { Category, CreateCategory, createTransaction, Transaction, TransactionFilter } from "./api-types"

export class APIService {       

 
 private static client
  = axios.create({
 baseURL: import.meta.env.VITE_API_URL,

 })
 static async createTransaction(createTransactionData:createTransaction):Promise<Transaction>{
const {data}=await APIService.client.post<Transaction>(
  '/transaction',
  createTransactionData,
)
return data;

 }

 static async getTransaction({title, categoryId, beginDate, endDate}:TransactionFilter):Promise<Transaction[]>{

  const {data}=await APIService.client.get<Transaction[]>('/transaction',{
    params:{
      ...(title?.length && {title}),
      ...(categoryId?.length && {categoryId}),
      beginDate,
      endDate,
          },
  },
);
    return data;
 }
 static async createCategory(createCategoryData: CreateCategory): Promise<Category>{
const {data}= await APIService.client.post<Category>('/catygories', createCategoryData,

)


return data

  }
  static async getCategories():Promise<Category[]>{
    const {data}= await  APIService.client.get<Category[]>('/categories')


    return  data
  }
}