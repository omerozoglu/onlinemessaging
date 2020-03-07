import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginService } from "../../authentication/services/login.service";
import { User } from "../services/user.model";
import { from } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isAlertShow: number = 0;
  user: User = new User();
  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: "",
      password: ""
    });
  }

  login(user) {
    this.loginService
      .loginUser({ username: user.username, password: user.password })
      .subscribe(
        res => {
          console.log(res);
          if (res.TOKEN) {
            this.router.navigateByUrl("/");
          }
        },
        err => {
          console.log(err);
        }
      );
  }
}
