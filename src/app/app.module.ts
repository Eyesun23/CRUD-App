import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
// material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

// components
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component'
import { NavbarComponent } from './navbar/navbar.component'
import { UserlistComponent } from './userlist/userlist.component'
import { CreateuserComponent } from './createuser/createuser.component'
import { EdituserComponent } from './edituser/edituser.component'


// routing
import { RouterModule, Routes } from '@angular/router';

// services
import {UserService} from './users.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyDY-L0pmAcMt_YHzwz7nIJQ-H2Kizc2MBI',
  authDomain: 'ng-sample-c3142.firebaseapp.com',
  databaseURL: 'https://ng-sample-c3142.firebaseio.com',
  projectId: 'ng-sample-c3142',
  storageBucket: 'ng-sample-c3142.appspot.com',
  messagingSenderId: '775141799547'
};


const appRoutes: Routes = [
  {
    path: 'create-user',
    component: CreateuserComponent
  },
  {
    path: 'users',
    component: UserlistComponent
  },
  {
    path: 'edit/:key',
    component: EdituserComponent
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    UserlistComponent,
    CreateuserComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    AngularFireDatabase,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
