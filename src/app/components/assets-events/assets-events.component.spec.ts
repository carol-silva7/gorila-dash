import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsEventsComponent } from './assets-events.component';

describe('AssetsEventsComponent', () => {
  let component: AssetsEventsComponent;
  let fixture: ComponentFixture<AssetsEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
