import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgothanhtanComponent } from './ngothanhtan.component';

describe('NgothanhtanComponent', () => {
  let component: NgothanhtanComponent;
  let fixture: ComponentFixture<NgothanhtanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgothanhtanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgothanhtanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
