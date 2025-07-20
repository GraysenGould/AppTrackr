import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import {ApplicationModel} from '../../models/application.model';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink, Router} from '@angular/router';
import { ApplicationStatusEnum } from "../../enums/application-status.enum";

@Component({
  selector: 'app-edit',
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit{
  applicationStatusEnum = ApplicationStatusEnum;
  public id!: number;
  public application: ApplicationModel = {
    company: '',
    position: '',
    applicationDate: '',
    status: ''
  }

  applicationForm = new FormGroup({
    company: new FormControl(''),
    position: new FormControl(''),
    applicationDate: new FormControl(''),
    status: new FormControl('')
  })

  constructor (private httpService: HttpService, private route: ActivatedRoute, private router: Router){
  
  }

  ngOnInit (){
    this.id = parseInt(this.route.snapshot.paramMap.get('id') ?? '1'); 
    this.httpService.getApplication(this.id).subscribe({
      next: (app) =>{
        // do error checking for bad information
        console.log(`Application Retrieved : ${JSON.stringify(this.application)}`);
        this.applicationForm.patchValue({
          company: app[0].company,
          position: app[0].position,
          applicationDate: this.formatDateString(app[0].applicationDate),
          status: app[0].status
        })
      },
      error: (err) =>{
        console.log(`Application Failed to load: ${err}`);
      }
    })
  }

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
      company: this.applicationForm.value.company ?? '', 
      position: this.applicationForm.value.position ?? '',
      applicationDate: this.applicationForm.value.applicationDate ?? '',  //new Date(this.applicationForm.value.applicationDate as Date),
      status: this.applicationForm.value.status ?? "",
    }
    this.httpService.editApplication(newApplication).subscribe(() => {
        this.router.navigate(["/tracking/view-all"]);
    });
    this.applicationForm.patchValue({
      company: '',
      position: '',
      applicationDate: '',
      status: ''
    })

  }

}
