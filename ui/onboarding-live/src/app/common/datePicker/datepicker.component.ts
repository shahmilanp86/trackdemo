import { Component } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './datePicker.component.html'
})
export class DatepickerComponent {
  colorTheme = 'theme-blue';

  bsConfig: Partial<BsDatepickerConfig>;

  applyTheme(pop: any) {
    // create new object on each property change
    // so Angular can catch object reference change
    this.bsConfig = Object.assign({}, {containerClass: 'theme-blue'});
    setTimeout(() => {
      pop.show();
    });
  }
}
