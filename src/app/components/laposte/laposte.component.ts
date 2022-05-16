import { Component } from '@angular/core';

@Component({
  selector: 'app-laposte',
  templateUrl: './laposte.component.html',
  styleUrls: ['./laposte.component.scss']
})
export class LaposteComponent {

  colis: string = "Là";

  onReceivedAR(dataReceived: string) {
    console.log("Mss du client:", dataReceived);
  }
}
