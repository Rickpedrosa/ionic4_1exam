import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatTextilPage } from './cat-textil.page';

describe('CatTextilPage', () => {
  let component: CatTextilPage;
  let fixture: ComponentFixture<CatTextilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatTextilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatTextilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
