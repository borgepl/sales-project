import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Pascal","De Borger","borgepl@gmail.com", 50000),
    new SalesPerson("John","Doe","john@gmail.com", 40000),
    new SalesPerson("Bill","Gates","gates@gmail.com", 500000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
