import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dashboard-selector',
    templateUrl: 'dashboard.component.html'
})
export class DashBoardComponent {
    welcomeMessage = `hello!`;
}
