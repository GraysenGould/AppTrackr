import { Component, OnInit, AfterViewInit } from '@angular/core';
import {APPS} from '../../mock-data/applications';
import {ForgeButtonModule } from '@tylertech/forge-angular';
import {HttpService} from '../../services/http.service';
import {ApplicationModel} from '../../models/application.model';
import { JsonPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-all',
  imports: [ForgeButtonModule],
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.scss'
})
export class ViewAllComponent implements OnInit {

  constructor ( private httpService: HttpService){}
  //allApplications: ApplicationModel[] = [{Id: 1, Company: "Amazon", ApplicationDate: "G", Status: "G"}] 
  public allApplications: ApplicationModel[] = [];
  ngOnInit(){
    this.GetAllApps();
    console.log(`Retrieved All Apps: ${this.allApplications}`)
  }

  //   ngOnInit(){
  //   this.GetAllApps();
  //   console.log(`Retrieved All Apps: ${this.allApplications}`)
  // }

  GetAllApps(){
    this.httpService.getAllApplications().subscribe({
            next: (apps) =>{
                console.log(`All Apps (from service): ${JSON.stringify(apps)}`);
                this.allApplications = apps;
            },
            error: (err) => {
                console.error(`Application failed to load apps: ${err}`); 
            }
        });
    }

  PrintApps() {
    console.log(this.allApplications)
  }
}