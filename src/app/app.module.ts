import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { ViewTaskComponent } from './task/view-task/view-task.component';
import { ProjectComponent } from './task/project/project.component';
import {UsersComponent} from './task/users/users.component';
import { EditTaskComponent } from './task/edit-task/edit-task.component';
//import {AppRoutingModule} from "./app.routing.module";
import {ApiService} from "./service/api.service";
import {TokenInterceptor} from "./core/interceptor";
import { Ng5SliderModule } from 'ng5-slider';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


const routes: Routes = [
  { path: 'add-task', component: AddTaskComponent },
  { path: 'view-task', component: ViewTaskComponent },
  { path: 'edit-task', component: EditTaskComponent },
  {path: 'add-project', component: ProjectComponent},
  {path:'add-user', component:UsersComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ViewTaskComponent,
    EditTaskComponent,
    ProjectComponent,
    UsersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    Ng5SliderModule,
    Ng2SearchPipeModule
  ],
  exports: [RouterModule],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
