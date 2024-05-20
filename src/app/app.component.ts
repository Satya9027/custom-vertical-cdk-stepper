import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-stepper';

  onStepChange(event: Event, stepNumber:  Number){
    console.log(event);
    console.log(stepNumber);
  }
}

