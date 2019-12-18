import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ApiService} from "../../service/api.service";
import {ApiResponse} from "../../model/api.response";
import { Options } from 'ng5-slider';
import { Task } from 'src/app/model/task.model';
import { Usersio } from 'src/app/model/user.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  title = 'task-manager';
  sucessmsg = '';
  actbtn = 'Add';
  checked = false;

  usr: Usersio = new Usersio();
  users: ApiResponse;


  tsk: Task = new Task();
  tasks: ApiResponse;
  ti: Task[];
  
  
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) {
    this.apiService.getTasks()
      .subscribe(fdata => {
        this.tasks = fdata;


      });

    this.apiService.getAllUsers().subscribe(udata => {
      this.users = udata;
    })

  }
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      taskName: ['', Validators.required],
      parentTaskName: ['', Validators.required],
      priority: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      employeeId:['', Validators.required]
    });

    return;

  }

  addTask() {
    console.log(this.checked);
    if(this.checked === false){
    this.apiService.createTask(this.tsk)
      .subscribe(msg => {
   
        this.sucessmsg = 'New Task : ' + this.tsk.taskName + ' got inserted successfully ';
      });
     }
     else{
      this.apiService.createPTask(this.tsk)
      .subscribe(msg => {
 
        this.sucessmsg = 'Parent Task got inserted successfully';
      });
    }
  }

  tskreset() {
    this.sucessmsg = '';
    this.actbtn = 'Add';
    this.tsk = new Task();  
    this.checked = false;
  }
  
}
