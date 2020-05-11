import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  products=["BMW","Swift","Range Rover"]
  constructor(private service:ProductService) { }

  ngOnInit(): void {
  }

  addProduct(product:NgForm){
    this.service.postProduct(product.value).subscribe(
      () =>{
        alert('Product Added Successfully')
        // this.empForm.reset()
      }
    )
    product.reset()

}
}
