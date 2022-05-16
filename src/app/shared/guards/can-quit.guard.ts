import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { TwoComponent } from 'src/app/component/todo/two/two.component';

export interface CanQuitPage {
  quit: () => boolean|Promise<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class CanQuitGuard implements CanDeactivate<CanQuitPage> {
  canDeactivate(component: CanQuitPage) {
    return component.quit();
  }
  
}