import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCoatingComponent } from './products-coating.component';

describe('ProductsCoatingComponent', () => {
  let component: ProductsCoatingComponent;
  let fixture: ComponentFixture<ProductsCoatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsCoatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCoatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
