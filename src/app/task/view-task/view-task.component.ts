import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {Task} from "../../model/task.model";
import {ApiService} from "../../service/api.service";
import {ApiResponse} from "../../model/api.response";
import { DatePipe } from '@angular/common';
import { Options } from 'ng5-slider';
import { tick } from '@angular/core/testing';


@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css'],
  providers: [DatePipe]
})
export class ViewTaskComponent implements OnInit {
  viewForm : FormGroup;
  value: number = 0;
  options: Options = {
    floor: 0,
    ceil: 100
  };
 
  tasks: ApiResponse;
  currentDate = new Date();
  today = '';
  ti: Task[];
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService,private datepipe: DatePipe) { 
    this.apiService.getTasks()
    .subscribe( fdata => {
      this.tasks = fdata;
    
    });
    this.today = this.datepipe.transform(this.currentDate, 'yyyy-MM-dd');    

  }

  ngOnInit() {

      this.viewForm = this.formBuilder.group({
        projectName: ['', Validators.required],
        taskName: ['', Validators.required],
        parentTaskName: ['', Validators.required],
        priority: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required]
      });
  }

  isOld(date){
    
    if(date > this.today){
      return false;
    }else{
      return true;
    }
  }

  sortByStartDate(){
    this.apiService.sortTaskByStartDate()
    .subscribe( fdata => {
      this.tasks = fdata;
    
    });
  }

  sortByEndDate(){
    this.apiService.sortTaskByEndDate()
    .subscribe( fdata => {
      this.tasks = fdata;
    
    });
  }

  sortByPriority(){
    this.apiService.sortTaskByPriority()
    .subscribe( fdata => {
      this.tasks = fdata;
    
    });
  }

  sortByStatus(){
    this.apiService.sortTaskByStatus()
    .subscribe( fdata => {
      this.tasks = fdata;
    
    });
  }


  editTask(task: Task): void {
   
    this.router.navigate(['edit-task']);
  };


}
