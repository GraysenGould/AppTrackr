import { Component} from '@angular/core';
import { ApplicationModel } from '../../models/application.model';
import {HttpService} from '../../services/http.service';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-application',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  constructor (private httpService: HttpService ){}
  //newApplication?: ApplicationModel;

  applicationForm = new FormGroup({
    company: new FormControl(''),
    applicationDate: new FormControl(''),
    status: new FormControl('')
  })

  onSubmit() {
    console.log(this.applicationForm.value);

    if (this.applicationForm.value.company == '' || this.applicationForm.value.status == ''){
      window.alert("Please Fill out all sections of application");
      return;
    }
    let newApplication: ApplicationModel = {
      id: undefined,
      company: this.applicationForm.value.company ?? (new Date()).toString(), 
      applicationDate: this.applicationForm.value.applicationDate ?? '',  //new Date(this.applicationForm.value.applicationDate as Date),
      status: this.applicationForm.value.status ?? "",
    }
    console.log(`type of application date: ${typeof(newApplication.applicationDate)}, ${newApplication.applicationDate}`);
    this.httpService.postNewApplication(newApplication);
    this.applicationForm.patchValue({
      company: '',
      applicationDate: '',
      status: ''
    })
  }
}
