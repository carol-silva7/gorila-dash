import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsHighComponent } from './assets-high.component';

describe('AssetsHighComponent', () => {
  let component: AssetsHighComponent;
  let fixture: ComponentFixture<AssetsHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
