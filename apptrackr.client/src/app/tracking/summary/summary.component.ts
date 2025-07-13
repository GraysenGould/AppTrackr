import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {ApplicationModel} from '../../models/application.model';

@Component({
  selector: 'app-summary',
  standalone: true,
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent implements OnInit {
  public submitionCount: number = 0;
  constructor ( private httpService: HttpService){}
  ngOnInit(){
    this.GetAllApps();
  }

  GetAllApps(){
    this.httpService.getAllApplications().subscribe({
            next: (apps) =>{
                console.log(`All Apps (from service): ${JSON.stringify(apps)}`);
                this.submitionCount = apps.length;
            },
            error: (err) => {
                console.error(`Application failed to load apps: ${err}`); 
            }
        });
    }


}
