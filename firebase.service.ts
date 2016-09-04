import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import 'rxjs/Rx';
import {last} from "rxjs/operator/last";
import {ControlGroup} from "angular2/common";


@Injectable()
export class FirebaseService{


    constructor (private _http: Http,private firebaseUrl){}

    setUser(firstName: string, lastName: string){
        const body = JSON.stringify({firstName: firstName,lastName:lastName});
        return this._http.put('https://test-22806.firebaseio.com/',body)
            .map(res => res.json());
    }


    getUser(){
        return this._http.get('https://test-22806.firebaseio.com/')
            .map(res => res.json());
    }
}