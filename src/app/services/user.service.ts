import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {User} from '../Interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API = 'https://jsonplaceholder.typicode.com/users';
  userData: Observable<User>;

  constructor(private http: HttpClient) {
    this.userData = this.http.get(this.API);
  }
}
