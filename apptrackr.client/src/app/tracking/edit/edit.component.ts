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
    id: new FormControl(0),
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
          id: app[0].id ?? -1,
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
  putUpdated (): void{
    console.log("Please implement this method");
  }

  formatDateString(dateString: string) {
    let date = new Date(dateString)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

}
