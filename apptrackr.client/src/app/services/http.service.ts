import {Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApplicationModel} from '../models/application.model';


@Injectable({providedIn: 'root'})
export class HttpService {
    private http = inject(HttpClient);

    postNewApplication (newApp: ApplicationModel){
        console.log("thing ran");
        this.http.post<ApplicationModel>('https://localhost:7167/tracking/create', newApp).subscribe(app =>{
            console.log("new Application submitted:", app);
        })
    }
    
    getApplications (){
        return this.http.get<ApplicationModel[]>('https://localhost:7167/tracking/view-all');
    }
}
