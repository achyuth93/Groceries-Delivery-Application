import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {



  products=["BMW","Swift","Range Rover"]
  constructor(private fb:FormBuilder,private service:ProductService,private route:ActivatedRoute,private router:Router) { }

  proForm=this.fb.group(
    {
      id:[''],
      category:[''],
      name:[''],
      description:[''],
      price:['']
    }
  );

id:number;

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      (params) => {
     this.id= parseInt(params.get('id'))
console.log(this.id)
      }
    );
    this.service.getSingleProduct(this.id).subscribe(
      pro => {
        this.proForm.setValue({...pro})
      }
    )

  }

  editPro(){

    this.service.putProduct(this.proForm.value).subscribe(
      ()=>{
        alert('Product Updated Successfully')
        this.router.navigate(['/products'])
      }
    )

  }


}
