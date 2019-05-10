import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoxuanhoangComponent } from './ngoxuanhoang.component';

describe('NgoxuanhoangComponent', () => {
  let component: NgoxuanhoangComponent;
  let fixture: ComponentFixture<NgoxuanhoangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoxuanhoangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoxuanhoangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
