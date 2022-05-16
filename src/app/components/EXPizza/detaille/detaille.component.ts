import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-detaille',
  templateUrl: './detaille.component.html',
  styleUrls: ['./detaille.component.scss']
})
export class DetailleComponent implements OnInit, AfterViewInit{
  myVar = ""

  @Input('Detailles')
  DetaillePizza: any = {};

  @ViewChild("myInput") 
  myInput!: ElementRef<HTMLInputElement>

  @ViewChildren("myInput") 
  inputsTags!: QueryList<ElementRef>

  ngOnInit(){
  }

  ngAfterViewInit(){
  }

  ngAfterViewChecked(){
  }
}