import { Component } from '@angular/core';
//import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder,
  FormsModule,ReactiveFormsModule}  from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-manager';
  constructor(private formBuilder: FormBuilder,private router: Router) { }
  ngOnInit() {
  }

  addTask(): void {
    this.router.navigate(['add-task']);
  };

  viewTask(): void {
    this.router.navigate(['view-task']);
  };

  addProject():void {
this.router.navigate(['add-project']);
  };
  addUser():void {
    this.router.navigate(['add-user']);
      };
}
