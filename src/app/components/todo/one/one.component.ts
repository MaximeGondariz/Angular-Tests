import { AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { TodoService } from 'src/app/shared/services/todo.service';
import { TwoComponent } from '../two/two.component';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    
  }

  ngDoCheck(): void {
    
  }

  ngOnDestroy(): void {
    
  }
  
  
}
