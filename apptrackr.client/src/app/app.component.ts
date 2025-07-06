import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  imports: [RouterOutlet]
})
export class AppComponent {

  title = 'apptrackr.client';
}
