import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatOthersPage } from './cat-others.page';

describe('CatOthersPage', () => {
  let component: CatOthersPage;
  let fixture: ComponentFixture<CatOthersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatOthersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatOthersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
