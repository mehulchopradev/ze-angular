import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCalcResultsComponent } from './live-calc-results.component';

describe('LiveCalcResultsComponent', () => {
  let component: LiveCalcResultsComponent;
  let fixture: ComponentFixture<LiveCalcResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveCalcResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveCalcResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
