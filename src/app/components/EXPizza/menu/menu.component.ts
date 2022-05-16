import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from "src/app/shared/models/pizza";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  @Input('Noms')
  NomPizza: any = {};

  @Output()
  changeDetaille = new EventEmitter<number>()
  selected?: Pizza

  idDetaille(i: number){
    this.selected = this.NomPizza[i];
    this.changeDetaille.emit(i);
  }

  ngOnInit(){
  }

  showData(){
    console.log(this.NomPizza)
  }
}

//pizzas: Pizza[] = []