import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsIntroComponent } from './products-intro.component';

describe('ProductsIntroComponent', () => {
  let component: ProductsIntroComponent;
  let fixture: ComponentFixture<ProductsIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
