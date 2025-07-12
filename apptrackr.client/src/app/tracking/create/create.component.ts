import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApplicationModel } from '../../models/application.model';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-create-application',
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  constructor (private httpService: HttpService ){}
  newApplication: ApplicationModel = {
    id: 0,
    company: "",
    applicationDate: "",
    status: ""
  }

  submitApplication (newApp: ApplicationModel){ 
    this.httpService.postNewApplication(newApp);
  }
}
