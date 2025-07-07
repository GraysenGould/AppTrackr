import { Component } from '@angular/core';
import {APPS} from '../../mock-data/applications';
import {ForgeButtonModule } from '@tylertech/forge-angular';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-view-all',
  imports: [ForgeButtonModule],
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.scss'
})
export class ViewAllComponent {

  constructor ( private httpService: HttpService){}
  apps = APPS;

  GetAllApps() {
    this.httpService.getApplications().subscribe(apps => {
      console.log("Get Ran");
      console.log('Applications:', apps);
      });
  }
}