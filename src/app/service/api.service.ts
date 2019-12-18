import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from "../model/task.model";
import { Usersio } from "../model/user.model";
import { Projectio } from "../model/project.model";
import { Observable } from "rxjs/index";
import { ApiResponse } from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8083/projectmanager';


  getTasks(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + "/tasks");
  }

  sortTaskByStartDate(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + "/tasks/sort/startdate");
  }

  sortTaskByEndDate(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + "/tasks/sort/enddate");
  }

  sortTaskByPriority(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + "/tasks/sort/priority");
  }

  sortTaskByStatus(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + "/tasks/sort/status");
  }

  getTaskById(taskId: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + taskId);
  }

  createTask(task: Task): Observable<ApiResponse> {
    alert('Inside create Task=' + task.taskId);
    return this.http.post<ApiResponse>(this.baseUrl + "/task/create", task);
  }

  createPTask(task: Task): Observable<ApiResponse> {
    alert('Inside create Task=' + task.taskId);
    return this.http.post<ApiResponse>(this.baseUrl + "/ptask/create", task);
  }

  addProject(project: Projectio): Observable<ApiResponse> {

    return this.http.post<ApiResponse>(this.baseUrl + "/project/create", project);
  }

  updateTask(task: Task): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + "/task/modify", task);
  }

  endTask(taskId: string): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + taskId);
  }

  getAllUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + "/users");
  }

  addUser(user: Usersio): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + "/user/add", user);
  }
  sortByFirstName(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + "/users/sort/firstname");

  }
  sortByLastName(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + "/users/sort/lastname");

  }

  sortById(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + "/users/sort/id");
  }

  sortByProjSDate(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + "/projects/sort/sdate");
  }

  sortByProjEDate(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + "/projects/sort/edate");
  }

  sortByProjPriority(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + "/projects/sort/priority");
  }

  sortByProjStatus(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + "/projects/sort/status");
  }

  delUser(userId: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + "/user/delete/" + userId);
  }

  getAllProjects(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + "/projects");
  }



}
