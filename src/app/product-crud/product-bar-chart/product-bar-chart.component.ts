import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-bar-chart',
  templateUrl: './product-bar-chart.component.html',
  styleUrls: ['./product-bar-chart.component.css']
})
export class ProductBarChartComponent implements OnInit {

  constructor(private service:ProductService) { }

bchart:[];

ngOnInit(): void {
  this.service.getAllProducts().subscribe(
    data =>{
      let category = data.map(data=>data.category)
      let price = data.map(data=>data.price);

      let carList = [];
      category.forEach(car => {
          carList.push(car)
       });

       this.bchart = new Chart('barcanvas',{
        type:'bar',
        data: {
          labels: carList,
          datasets: [{
              label: price,
              data: [69, 75, 64, 80, 76, 59],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        legend: {
          display: true,
        },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
      })






    }
  )
}



}


