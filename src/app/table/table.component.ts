import { Component, OnInit,  } from '@angular/core';
import {formatDate, getLocaleDateFormat} from "@angular/common";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  arr=[{ name: 'some product', price: '$20', expirationDate: '13/07/2019', category: 'some category'},{ name: 'some product1', price: '$120', expirationDate: '19/01/2022', category: 'some category1'},{ name: 'some product2', price: '$189', expirationDate: '25/11/2021', category: 'some category3'},{ name: 'some product4', price: '$240', expirationDate: '13/07/2023', category: 'some category7'},{ name: 'some product6', price: '$920', expirationDate: '13/07/2019', category: 'some category'},{ name: 'some product10', price: '$2890', expirationDate: '13/07/2019', category: 'some category'},{ name: 'some product66', price: '$2220', expirationDate: '26/11/2021', category: 'some category'}];
  constructor() { }

  ngOnInit(): void {
  }

  check(obj:any){
    const mydate=Date.now();
    let itemDate=obj.expirationDate.split('/');
    itemDate.reverse();
    let itemDateM=Date.parse(itemDate.join('-'));
    if ((itemDateM-mydate)>0){
      if((itemDateM-mydate)<(2*24*60*60*1000)){
        return 'yellow'
      }
      return 'green'
    }else{
      return 'red'
    }
  }
}
