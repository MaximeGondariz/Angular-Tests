import { Component, OnInit } from '@angular/core';
import { CanQuitPage } from 'src/app/shared/guards/can-quit.guard';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, CanQuitPage {

  constructor() { }

  ngOnInit(): void {
  }

  quit() {
    return new Promise<boolean>((res) => {
      setTimeout(() => {
        res(true);
      }, 3000);
    })
  }

}
