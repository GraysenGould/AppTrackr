import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import {ApplicationModel} from '../../models/application.model';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit{

  public id!: number;
  public application: ApplicationModel = {
    company: '',
    applicationDate: '',
    status: ''
  }

  applicationForm = new FormGroup({
    company: new FormControl(''),
    applicationDate: new FormControl(''),
    status: new FormControl('')
  })

  constructor (private httpService: HttpService, private route: ActivatedRoute){
  
  }

  ngOnInit (){
    this.id = parseInt(this.route.snapshot.paramMap.get('id') ?? '1'); 
    this.httpService.getApplication(this.id).subscribe({
      next: (app) =>{
        // do error checking for bad information
        console.log(`Application Retrieved : ${JSON.stringify(this.application)}`);
        this.applicationForm.patchValue({
          company: app[0].company,
          applicationDate: this.formatDateString(app[0].applicationDate),
          status: app[0].status
        })
      },
      error: (err) =>{
        console.log(`Application Failed to load: ${err}`);
      }
    })
  }
  // post updated

  formatDateString(dateString: string) {
    let date = new Date(dateString)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

    putUpdated(): void {

    if (this.applicationForm.value.company == '' || this.applicationForm.value.status == ''){
      window.alert("Please Fill out all sections of application");
      return;
    }
    let newApplication: ApplicationModel = {
      id: this.id,
      company: this.applicationForm.value.company ?? (new Date()).toString(), 
      applicationDate: this.applicationForm.value.applicationDate ?? '',  //new Date(this.applicationForm.value.applicationDate as Date),
      status: this.applicationForm.value.status ?? "",
    }
    this.httpService.editApplication(newApplication);
    this.applicationForm.patchValue({
      company: '',
      applicationDate: '',
      status: ''
    })
  }

}
