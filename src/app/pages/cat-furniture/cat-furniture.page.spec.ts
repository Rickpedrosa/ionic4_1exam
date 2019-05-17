import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFurniturePage } from './cat-furniture.page';

describe('CatFurniturePage', () => {
  let component: CatFurniturePage;
  let fixture: ComponentFixture<CatFurniturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatFurniturePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatFurniturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
