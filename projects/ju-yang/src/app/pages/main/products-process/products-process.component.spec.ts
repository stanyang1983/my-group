import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsProcessComponent } from './products-process.component';

describe('ProductsProcessComponent', () => {
  let component: ProductsProcessComponent;
  let fixture: ComponentFixture<ProductsProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
