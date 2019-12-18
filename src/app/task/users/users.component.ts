import { Component, OnInit } from '@angular/core';
import { Usersio } from 'src/app/model/user.model';
import { ApiService } from "../../service/api.service";
import { ApiResponse } from "../../model/api.response";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userForm: FormGroup;
  sucessmsg = '';
  actbtn = 'Add';
  usr: Usersio = new Usersio();
  users: ApiResponse;
  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.apiService.getAllUsers().subscribe(usersop => {
      this.users = usersop;

    });
  }

  ngOnInit() {
    userForm: FormGroup;

    this.userForm = this.formBuilder.group({
  
      search: ['',Validators.required]
    });

  }
  getallUsers() {
    this.apiService.getAllUsers().subscribe(usersop => {
      this.users = usersop;
    });
  }
  addUser() {
    this.apiService.addUser(this.usr)
      .subscribe(msg => {
        console.log(msg);
        this.getallUsers();
      });

  }
  updUser(usrs) {
    this.actbtn = 'Update';
    this.usr = usrs;
  }

  usrreset() {
    this.usr = new Usersio();
    this.actbtn = 'Add';
    this.sucessmsg = '';
  }

  sortByFirstName(){
    this.apiService.sortByFirstName().subscribe(usersop => {
      this.users = usersop;
    });
  }

  sortByLastName(){
    this.apiService.sortByLastName().subscribe(usersop => {
      this.users = usersop;
    });
  }

  sortById(){
    this.apiService.sortById().subscribe(usersop => {
      this.users = usersop;
    });
  }
  delUser(userId){
    this.apiService.delUser(userId)
    .subscribe(msg => {
      this.getallUsers();
    });
  }
}
