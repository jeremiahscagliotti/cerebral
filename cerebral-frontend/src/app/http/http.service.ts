import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HttpService {

  constructor( private _http: HttpClient) { }

  NewUser(user) {
    return this._http.post('/users/', user);
  }
  GetUsers() {
    return this._http.get('/users');
  }
  GetSelectedUser(id) {
    return this._http.get('/users/' + id);
  }
  EditeUser(user) {
    return this._http.put('/users/' + user._id, user);
  }
  DeleteUser(id) {
    return this._http.delete('/users/' + id);
  }

}
