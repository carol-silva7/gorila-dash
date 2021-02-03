import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsLowComponent } from './assets-low.component';

describe('AssetsLowComponent', () => {
  let component: AssetsLowComponent;
  let fixture: ComponentFixture<AssetsLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
