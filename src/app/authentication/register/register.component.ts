import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { RegisterService } from "../services/register.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  onRegister: Number = 0;
  constructor(
    private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: "",
      username: "",
      email: "",
      password: ""
    });
  }

  register(user) {
    this.registerService.registerUser(user).subscribe(
      res => {
        console.log(res);
        if (res._id) {
          this.router.navigateByUrl("/account/login");
        }
        this.registerForm.reset();
      },
      err => console.log(err)
    );
  }

  onSubmit(user) {
    console.log(user);
    this.register(user);
  }
}
