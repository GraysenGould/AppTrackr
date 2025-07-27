import { Component, OnInit } from '@angular/core';
import {RouterOutlet, RouterLink, Router} from '@angular/router';
import { ForgeButtonModule, ForgeAppBarModule, ForgeAppBarMenuButtonModule, ForgeDrawerModule, 
  ForgeListModule, ForgeListItemModule, ForgeIconModule, ForgeScaffoldModule, ForgeCardModule, 
  ForgeIconButtonModule, ForgeAppBarProfileButtonModule} from '@tylertech/forge-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, ForgeButtonModule, ForgeAppBarModule, ForgeAppBarMenuButtonModule, 
    ForgeDrawerModule, ForgeListModule, ForgeListItemModule, ForgeIconModule, ForgeScaffoldModule, ForgeCardModule,
  RouterLink, ForgeIconButtonModule, ForgeAppBarProfileButtonModule]
})
export class AppComponent {   
  constructor (public router: Router) {}
  public isDrawerOpen = true;
  toggleDrawer () {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

    isDrawerItemSelected (): boolean {
    return true;
  }
}