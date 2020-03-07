import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatToolbarModule,
  MatGridList
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { MenuComponent } from "./sidenav/menu/menu.component";
import { HeadComponent } from "./sidenav/head/head.component";
import { FooterComponent } from "./footer/footer.component";
import { MessageComponent } from "./messagecomp/message/message.component";
import { GroupComponent } from "./sidenav/group/group.component";
import { FriendComponent } from "./sidenav/friend/friend.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RegisterComponent } from "./authentication/register/register.component";
import { LoginComponent } from "./authentication/login/login.component";
import { BodyComponent } from "./body/body.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { MessagecompComponent } from "./messagecomp/messagecomp.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MatGridList,
    HeadComponent,
    FooterComponent,
    MessageComponent,
    GroupComponent,
    FriendComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    BodyComponent,
    SidenavComponent,
    MessagecompComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
