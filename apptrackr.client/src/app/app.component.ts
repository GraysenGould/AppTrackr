import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { ForgeButtonModule, ForgeAppBarModule, ForgeAppBarMenuButtonModule, ForgeDrawerModule, 
  ForgeListModule, ForgeListItemModule, ForgeIconModule, ForgeScaffoldModule, ForgeCardModule} from '@tylertech/forge-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, ForgeButtonModule, ForgeAppBarModule, ForgeAppBarMenuButtonModule, 
    ForgeDrawerModule, ForgeListModule, ForgeListItemModule, ForgeIconModule, ForgeScaffoldModule, ForgeCardModule]
})
export class AppComponent {   
  title = 'Most Awesome App named Aleph'
}