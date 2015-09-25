/**
 * Created by user on 25.09.2015.
 */
import {Component, View} from 'angular2/angular2';

// Annotation section
@Component({
    selector: 'cms-home'
})
@View({
    templateUrl: 'app/home-module/views/home-view.html'
})
// Component controller
export class CmsHomeComponent {
    title: string;
    constructor() {
        this.title = 'Homepage';
    }
}