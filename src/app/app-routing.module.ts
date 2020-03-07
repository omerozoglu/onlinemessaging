import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./sidenav/menu/menu.component";
import { RegisterComponent } from "./authentication/register/register.component";
import { LoginComponent } from "./authentication/login/login.component";
import { BodyComponent } from "./body/body.component";
const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "", component: BodyComponent },
  { path: "account/login", component: LoginComponent },
  { path: "account/register", component: RegisterComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
