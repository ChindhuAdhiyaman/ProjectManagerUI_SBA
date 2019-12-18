import { Component, OnInit } from '@angular/core';
import { Projectio } from 'src/app/model/project.model';
import { ApiService } from "../../service/api.service";
import { ApiResponse } from "../../model/api.response";
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [DatePipe]
})
export class ProjectComponent implements OnInit {
  projectForm: FormGroup;
  sucessmsg = '';
  actbtn = 'Add';
  pj: Projectio = new Projectio();
  projects: ApiResponse;
  dtchk = false;
  date: Date;
  stdt = '';
  eddt = '';
  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private datepipe: DatePipe) {
    this.apiService.getAllProjects()
      .subscribe(fdata => {
        this.projects = fdata;

      });

  }

  ngOnInit() {

    projectForm: FormGroup;

    this.projectForm = this.formBuilder.group({

      search: ['', Validators.required]
    });
  }

  getallProjects() {
    this.apiService.getAllProjects()
      .subscribe(fdata => {
        this.projects = fdata;

      });
  }
  addProject() {
    console.log(this.pj.sdate);
    if (this.dtchk === true) {
      this.date = new Date();
      this.stdt = this.datepipe.transform(this.date, 'yyyy-MM-dd');
      this.date.setDate(this.date.getDate() + 1);
      this.eddt = this.datepipe.transform(this.date, 'yyyy-MM-dd');
      this.pj.sdate = this.stdt;
      this.pj.edate = this.eddt;
    }
    this.apiService.addProject(this.pj)
      .subscribe(msg => {
        console.log(msg);
        this.sucessmsg = 'Project details are added successfully ';
        this.getallProjects();
      });
  
  }


  updProject(pjs) {
    this.actbtn = 'Update';
    this.pj = pjs;
  }
  susProject(pjs) {
    console.log(pjs);

  }

  pjreset() {
    this.pj = new Projectio();
    this.actbtn = 'Add';
    this.sucessmsg = '';
  }

  sortByProjSDate() {
    this.apiService.sortByProjSDate()
      .subscribe(fdata => {
        this.projects = fdata;

      });
  }

  sortByProjEDate() {
    this.apiService.sortByProjEDate()
      .subscribe(fdata => {
        this.projects = fdata;

      });
  }

  sortByProjPriority() {
    this.apiService.sortByProjPriority()
      .subscribe(fdata => {
        this.projects = fdata;

      });
  }

  sortByProjStatus() {
    this.apiService.sortByProjStatus()
      .subscribe(fdata => {
        this.projects = fdata;

      });
  }

}
