import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatToolbarModule,
  MatGridList
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './message-menu/menu/menu.component';
import { HeadComponent } from './message-menu/head/head.component';
import { FooterComponent } from './message-menu/footer/footer.component';
import { MessageComponent } from './message-menu/message/message.component';
import { GroupComponent } from './message-menu/group/group.component';
import { FriendComponent } from './message-menu/friend/friend.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MatGridList,
    HeadComponent,
    FooterComponent,
    MessageComponent,
    GroupComponent,
    FriendComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
