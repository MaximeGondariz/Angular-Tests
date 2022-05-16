import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaFormComponent } from './components/EXPizza/formulaire/formulaire.component';
import { PizzaComponent } from './components/EXPizza/pizza/pizza.component';

const routes: Routes = [
  {
    path: 'pizzas',
    children: [
      { path: '', component: PizzaComponent },
      { path: 'new', component: PizzaFormComponent },
    ]
  },
  { path: '', redirectTo: 'pizzas', pathMatch: 'full' },
  { path: '**', redirectTo: 'pizzas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }