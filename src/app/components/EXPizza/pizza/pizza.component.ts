import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PizzaService } from "src/app/shared/services/pizza.service";
import { Pizza } from 'src/app/shared/models/pizza';


@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  constructor(
    private pizzaService: PizzaService
  ){}

  pizzas: any = []

  detaille: any = ''


  ngOnInit(): void {
    this.pizzaService.findAll().subscribe((data) => {
      for(let i=0;i<data.length;i++){
        this.pizzas.push(data[i])
      }
      
      this.detaille = this.pizzas[0]
    })
  }

  pizzas$: BehaviorSubject<Pizza[]> = this.pizzas

  onReceivedCD(IdDetaille: number){
    this.detaille = this.pizzas[IdDetaille]
  }
}
