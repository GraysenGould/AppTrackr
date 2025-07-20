import {Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApplicationModel} from '../models/application.model';
import {Observable} from 'rxjs';


@Injectable({providedIn: 'root'})
export class HttpService {
    private http = inject(HttpClient);

    postNewApplication (newApp: ApplicationModel): Observable<any>{
        return this.http.post<ApplicationModel>('https://localhost:7167/tracking/create', newApp);
    }
    
    getApplication (id: number){
        return this.http.get<ApplicationModel[]>(`https://localhost:7167/tracking/view-all/${id}`);
    }

    getAllApplications() /*: Observable<ApplicationModel[]> */ {
        return this.http.get<ApplicationModel[]>('https://localhost:7167/tracking/view-all'); // how to not hardcode port number?
    }
    editApplication(newApp: ApplicationModel): Observable<any> {
        return this.http.put(`https://localhost:7167/tracking/edit/${newApp.id}`, newApp);
    }
    deleteApplication(id: number){
        this.http.delete(`https://localhost:7167/tracking/delete/${id}`).subscribe(app =>{});
    }
}
