import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {animate, animateChild, group, query, state, style, transition, trigger} from "@angular/animations";
import {CdkStepper} from "@angular/cdk/stepper";

@Component({
  selector: 'custom-cdk-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{provide: CdkStepper, useExisting: StepperComponent}],
  standalone: false,
  animations: [trigger('stepTransition', [
    state('previous', style({transform: 'translate3d(0, -100%, 0)', display: 'none'})),
    state('current', style({transform: 'translate3d(0, 0, 0)', display: 'block'})),
    state('next', style({transform: 'translate3d(0, 100%, 0)', display: 'none'})),
    transition('* <=> current',
      group([
        animate('400ms cubic-bezier(0.2, 0.0, 0.2, 1)'),
        query('@*', animateChild(), {optional: true})
      ]))
  ])]
})
export class StepperComponent extends CdkStepper implements OnInit {
  @Input() activeClass = 'active';
  // readonly steps: QueryList<ScStepperComponent> = new QueryList<ScStepperComponent>();


  getClickEvent(event: MouseEvent) {
    // console.log(event);
    // console.log(this.selectedIndex);
  }

  ngOnInit(): void {
  }
}
