import { Component } from '@angular/core';
import {APPS} from '../../mock-data/applications';
import {ForgeButtonModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-view-all',
  imports: [ForgeButtonModule],
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.scss'
})
export class ViewAllComponent {
  apps = APPS;
}