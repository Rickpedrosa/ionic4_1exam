import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFoodPage } from './cat-food.page';

describe('CatFoodPage', () => {
  let component: CatFoodPage;
  let fixture: ComponentFixture<CatFoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatFoodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
