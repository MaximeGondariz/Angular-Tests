import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaposteComponent } from './laposte.component';

describe('LaposteComponent', () => {
  let component: LaposteComponent;
  let fixture: ComponentFixture<LaposteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaposteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaposteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
