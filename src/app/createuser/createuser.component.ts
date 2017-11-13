import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../users.service'

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {
  userForm: FormGroup;
  file;
  constructor(
    private fb: FormBuilder,
    private userSer: UserService,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      male: ['male']
    });
  }

  createUser(){
    this.userSer.saveUser(this.userForm.value, this.file);
    this.router.navigate(['/users']);
  }
  onFileChange(event) {
    this.file = event.srcElement.files;
    console.log(this.file);
  }
}
