import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit{

  @Input('colisReceived')
  colisRecupere: any = {};

  @Output()
  accuseDeReception = new EventEmitter<string>()

  ngOnInit(){
    this.accuseDeReception.emit();
    this.accuseDeReception.emit("C'est bon, j'ai bien reçu le colis");
  }
}
