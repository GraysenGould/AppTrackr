import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ForgeButtonModule } from '@tylertech/forge-angular';
import {HttpService} from '../../services/http.service';
import {ApplicationModel} from '../../models/application.model';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-view-all',
  imports: [ForgeButtonModule, CommonModule, RouterLink],
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
  deleteApp (id : number | undefined){
    let deleteApp = window.confirm("Do you want to delete this Application?");

    if (typeof id != "undefined" && deleteApp){
      this.httpService.deleteApplication(id);
      this.allApplications = this.allApplications.filter(app => app.id != id);
    }

  }
}