import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL="http://localhost:3000"

  apiURL=`${this.baseURL}/${'products'}`

  getAllProducts(){
return  this.http.get<Product[]>(this.apiURL)

  }

  constructor(private http:HttpClient) { }

  getSingleProduct(id:number){
    const url=`${this.apiURL}/${id}`
    console.log(url)
   return this.http.get(url)
}

  postProduct(emp:Product){

return this.http.post(this.apiURL,emp)
  }

  putProduct(emp:Product){
const url=`${this.apiURL}/${emp.id}`
return this.http.put(url,emp)
  }

  deleteProduct(id:number){
const url=`${this.apiURL}/${id}`
return this.http.delete(url)
  }

}
