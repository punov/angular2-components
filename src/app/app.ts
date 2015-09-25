/**
 * Created by apunov on 23.09.2015.
 */
import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
	selector: 'my-app'
})
@View({
	templateUrl: 'app/home-module/views/home-view.html'
})
// Component controller
class MyAppComponent {
	name: string;
	constructor() {
		this.name = 'Alice';
	}
}

bootstrap(MyAppComponent);