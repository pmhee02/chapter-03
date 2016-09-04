import {Component} from "angular2/core";
import {ControlGroup} from "angular2/common";
import {FirebaseService} from "./firebase.service";


@Component({
    selector: 'firebase',
    template: `
        <div class="flex">
            <div id="set-user" class="container">
                <h2>Set a user</h2>
                <form (ngSubmit)="onSubmit(f)" #f="ngForm">
                    <div>
                        <label for="first-name">First Name</label>
                        <input type="text" ngControl="firstName">
                    </div>
                    <div>
                        <label for="first-name">First Name</label>
                        <input type="text" ngControl="firstName">
                    </div>
                    <br>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div id="get-user" class="container">
                <h2>Get User</h2>
                <button (click)="onGetUser()">Get User</button>
            </div>
        </div>
        <br>
        <div class="container" id="res">Response: {{res}}</div>

        `,
        providers: [FirebaseService]
})

export class FirebaseComponent{
    res: string;

    constructor(private _firebaseService:FirebaseService){}

    onSubmit(form: ControlGroup){
        this._firebaseService.setUser(form.value.firstName, form.value.lastName)
        .subscribe(
            user => this.res = JSON.stringify(user),
            error => console.log(error),
            () => console.log("FINISHED Firebase")
        );
    }

    onGetUser(){
        this._firebaseService.getUser()
        .subscribe(
            user => this.res = JSON.stringify(user),
            error => console.log(error),
            () => console.log("FINISHED Firebase")
        );
    }

}