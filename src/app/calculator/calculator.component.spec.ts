import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { LiveCalcResultsComponent } from '../live-calc-results/live-calc-results.component';

fdescribe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let componentElement: HTMLElement;
  let first, ans;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent, LiveCalcResultsComponent ],
      imports: [
        FormsModule,
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents().then(() => {
    });
  }));

  /* beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance; // reference to the actual component class
    componentElement = fixture.debugElement.nativeElement;
  }); */

  it('should prepopulate the fields with default values', () => {
    fixture = TestBed.createComponent(CalculatorComponent);
    fixture.detectChanges();

    component = fixture.componentInstance; // reference to the actual component class
    componentElement = fixture.debugElement.nativeElement;

    first = componentElement.querySelector('.at-first');
    ans = componentElement.querySelector('.at-ans');
    expect(first.textContent).toBe('7');
    expect(ans.textContent).toBe('4');
  });
});
