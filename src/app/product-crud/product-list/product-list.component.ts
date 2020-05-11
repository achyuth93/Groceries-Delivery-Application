import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  searchKey:string;

  pageNo:number=1;

  key:string = "name";
  reverse:boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  products:Product[];
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.service.getAllProducts().subscribe(
      (res) => {this.products=res;
      console.log(this.products)}
    )
  }

  deletePro(id:number){

    if(confirm('Are you sure to delete the Product?')){
      this.service.deleteProduct(id).subscribe(
        ()=>{
          this.getProducts()
        }
      )
    }

  }


}
