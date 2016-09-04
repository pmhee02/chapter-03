
import { Component } from 'angular2/core';
import {HTTPTestComponent} from "./http-test.component";
import {FirebaseComponent} from "./firebase.component";

@Component({
    selector: '#application',
	template: `
    <h1>Hello HTTP</h1><hr /><br>
    <http-test></http-test>

    <br><hr /><br>

    <h2> Hello Firebase </h2>
    <firebase></firebase>
    `,
    directives: [HTTPTestComponent, FirebaseComponent]
})

export class AppComponent { }