import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import {Chart} from 'chart.js'
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-product-chart',
  templateUrl: './product-chart.component.html',
  styleUrls: ['./product-chart.component.css']
})
export class ProductChartComponent implements OnInit {

  chart:[];
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe(
      data =>{
        let category = data.map(data=>data.category)
        let price = data.map(data=>data.price);

        let carList = [];
        category.forEach(car => {
            carList.push(car)
         });
         this.chart=new Chart('canvas',{
          type:'line',
          data:
         {
           labels:carList,
           datasets:[
             {
               data:price,
               borderColor:"red",
               backgroundColor: "blue",
               fill:false,
               label: " Car Price"
             }
           ]
         },
         options:
         {
           legend: {
             display: true,
           },
           scales : {
             xAxes : [{display:true}],
             yAxes : [{display:true}],
           }
         }

          })
      }
    )
  }

}
