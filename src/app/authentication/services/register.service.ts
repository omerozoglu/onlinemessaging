import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  private URL = "http://localhost:3100/account/register";
  constructor(private http: HttpClient) {}

  registerUser(user) {
    return this.http.post<any>(this.URL, user);
  }
}
