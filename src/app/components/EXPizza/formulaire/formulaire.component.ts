import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/shared/models/pizza';
import { PizzaService } from "src/app/shared/services/pizza.service";

@Component({
  selector: 'app-pizza-form',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class PizzaFormComponent implements OnInit {

  categories = [
    Category.TOMATO,
    Category.CREAM,
    Category.SWEET,
    Category.SPECIAL,
  ];

  formCreatePizza = new FormGroup({
    name: new FormControl(''
    // , [Validators.required,
    //   Validators.minLength(3),]
    ),
    category: new FormControl(Category.TOMATO),
    price: new FormControl(''),
    ingredients: new FormArray([
      new FormControl(''),
    ]),
  });

  constructor() {
    this.formCreatePizza.get('name')
    this.formCreatePizza.get('category')
    this.formCreatePizza.get('price')
    this.formCreatePizza.get('ingredients')
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formCreatePizza.value);
  }

}