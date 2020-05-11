import { Component } from '@angular/core';

class item {  
  name: string;  
  val: number;  
}  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-gallery';
  items: item[] = [{name: 'samsung', val: 1}, {name: 'iphone', val: 2}, {name: 'oneplus', val: 3}];  
  selectedValue: string= 'samsung';  
  
  constructor(){}

  
  
}
