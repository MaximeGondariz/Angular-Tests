import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailleComponent } from './product-detaille.component';

describe('ProductDetailleComponent', () => {
  let component: ProductDetailleComponent;
  let fixture: ComponentFixture<ProductDetailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
