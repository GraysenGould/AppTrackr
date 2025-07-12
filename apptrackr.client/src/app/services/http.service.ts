import {Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApplicationModel} from '../models/application.model';
import {Observable} from 'rxjs';


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

    getAllApplications() /*: Observable<ApplicationModel[]> */ {
        return this.http.get<ApplicationModel[]>('https://localhost:7167/tracking/view-all'); // how to not hardcode port number?
    }

    // getAllApplications (): ApplicationModel[] {
    //     var applications: ApplicationModel[] = [];
    //     this.http.get<ApplicationModel[]>('https://localhost:7167/tracking/view-all').subscribe({
    //         next: (apps) =>{
    //             console.log(`All Apps (from service): ${JSON.stringify(apps)}`);
    //             applications = apps;
    //         },
    //         error: (err) => {
    //             console.error(`Application failed to load apps: ${err}`); 
    //         }
    //     });
    //     return applications;
    // }
}
