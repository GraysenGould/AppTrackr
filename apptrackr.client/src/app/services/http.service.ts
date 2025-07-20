import {Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApplicationModel} from '../models/application.model';
import {Observable} from 'rxjs';


@Injectable({providedIn: 'root'})
export class HttpService {
    private http = inject(HttpClient);

    postNewApplication (newApp: ApplicationModel){
        this.http.post<ApplicationModel>('https://localhost:7167/tracking/create', newApp).subscribe(app =>{
        })
    }
    
    getApplication (id: number){
        return this.http.get<ApplicationModel[]>(`https://localhost:7167/tracking/view-all/${id}`);
    }

    getAllApplications() /*: Observable<ApplicationModel[]> */ {
        return this.http.get<ApplicationModel[]>('https://localhost:7167/tracking/view-all'); // how to not hardcode port number?
    }
    editApplication(newApp: ApplicationModel) {
        this.http.put<ApplicationModel>(`https://localhost:7167/tracking/edit/${newApp.id}`, newApp).subscribe(app =>{});
    }

}
