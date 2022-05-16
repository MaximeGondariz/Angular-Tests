import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
// import { LaposteComponent } from './components/laposte/laposte.component';
// import { MeComponent } from './components/me/me.component';
import { MenuComponent } from './components/EXPizza/menu/menu.component';
import { PizzaComponent } from './components/EXPizza/pizza/pizza.component';
import { DetailleComponent } from './components/EXPizza/detaille/detaille.component';
import { TestDirective } from './shared/directives/test.directive';
import { SelectDirective } from './shared/directives/select.directive';
import { PizzaFormComponent } from './components/EXPizza/formulaire/formulaire.component';
// import { ContactComponent } from './components/contact/contact.component';
// import { TodoComponent } from './components/todo/todo.component';
// import { TwoComponent } from './components/todo/two/two.component';
import { HeaderComponent } from './components/header/header.component';
// import { OneComponent } from './components/todo/one/one.component';
// import { ProductComponent } from './components/product/product.component';
// import { ProductDetailleComponent } from './components/product/product-detaille/product-detaille.component';
// import { ProductListComponent } from './components/product/product-list/product-list.component';



@NgModule({
  declarations: [
    AppComponent,
    // MeComponent,
    // LaposteComponent,
    MenuComponent,
    PizzaComponent,
    DetailleComponent,
    // ContactComponent,
    //TodoComponent,
    // TwoComponent,
    HeaderComponent,
    // OneComponent,
    // ProductComponent,
    // ProductDetailleComponent,
    // ProductListComponent,
    TestDirective,
    SelectDirective,
    PizzaFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }