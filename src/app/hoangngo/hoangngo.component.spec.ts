import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoangngoComponent } from './hoangngo.component';

describe('HoangngoComponent', () => {
  let component: HoangngoComponent;
  let fixture: ComponentFixture<HoangngoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoangngoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoangngoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
