import { Component} from '@angular/core';
import { ApplicationModel } from '../../models/application.model';
import { HttpService } from '../../services/http.service';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationStatusEnum } from '../../enums/application-status.enum';
import { ForgeCardModule, ForgeFieldModule, ForgeButtonModule} from '@tylertech/forge-angular';

@Component({
  selector: 'app-create-application',
  imports: [FormsModule, ReactiveFormsModule, ForgeCardModule, ForgeFieldModule, ForgeButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  constructor (private httpService: HttpService, private router: Router ){}
  //newApplication?: ApplicationModel;

  applicationStatusEnum = ApplicationStatusEnum;

  public statusList = Object.values(this.applicationStatusEnum);

  applicationForm = new FormGroup({
    company: new FormControl(''),
    position: new FormControl(''),
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
      company: this.applicationForm.value.company ?? '', 
      position:  this.applicationForm.value.position ?? '', 
      applicationDate: this.applicationForm.value.applicationDate ?? '',  //new Date(this.applicationForm.value.applicationDate as Date),
      status: this.applicationForm.value.status ?? '',
    }

    this.httpService.postNewApplication(newApplication).subscribe(() => {
      this.router.navigate(['/tracking/view-all']);
    });

    this.applicationForm.patchValue({
      company: '',
      position: '',
      applicationDate: '',
      status: ''
    })
  }
}
