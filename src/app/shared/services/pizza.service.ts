import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private _urlApi = environment.urlApi + '/pizzas';

  constructor(
    private http: HttpClient,
  ) { }

  public findAll() {
    return this.http.get<Pizza[]>(this._urlApi);
  }

  public findOne(id: string) {
    return this.http.get<Pizza>(this._urlApi + '/' + id);
  }

  public updateOne(pizza: Pizza) {
    // return ?
  }

  public deleteOne(id: string) {
    return this.http.delete<Pizza[]>(this._urlApi + '/' + id);
  }
}
