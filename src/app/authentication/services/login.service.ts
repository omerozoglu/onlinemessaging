import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  private URL = "http://localhost:3100/account/login";

  constructor(private http: HttpClient) {}

  loginUser(user) {
    return this.http.post<any>(this.URL, user);
  }
}
