import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:quotemark
    // tslint:disable-next-line:component-selector
    selector: 'workout-stats-selector',
    // tslint:disable-next-line:quotemark
    templateUrl: 'workout-stats.component.html',
})
export class WorkoutStatsComponent {
    title: String;

    constructor() {
        this.title = 'WorkoutStats Component!';
    }
}

