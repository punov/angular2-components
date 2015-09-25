import {View, Component} from 'angular2/angular2';
import {RouteConfig, Router} from 'angular2/router';
import {CmsHomeComponent} from '../home-module/home-module'

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'app/app-module/views/main-view.html'
})

@RouteConfig([
    { path: '/',       redirectTo: '/home' },
    { path: '/home',   as: 'home',   component: CmsHomeComponent }
])
export class AngularApp {
    constructor(public router: Router) {
    }
}