import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuanhoangComponent } from './xuanhoang.component';

describe('XuanhoangComponent', () => {
  let component: XuanhoangComponent;
  let fixture: ComponentFixture<XuanhoangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuanhoangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuanhoangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
