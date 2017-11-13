import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../users.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  user;
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private userSer: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.createForm();
  };

  ngOnInit() {
    let key = this.route.snapshot.paramMap.get('key');
    this.userSer.getUser(key).subscribe(val => {
      this.user = val;
      this.userForm.setValue({
        name: this.user.name,
        email: this.user.email,
        male: this.user.male
      });
    })
  };

  rewriteUser() {
    let key = this.route.snapshot.paramMap.get('key');
    this.userSer.updateUser(key, this.userForm.value);
    this.goBack();
  }

  createForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required ],
      email: '',
      male: ['male']
    });
  }

  goBack() {
    this.router.navigate(['/users']);
    this.userForm.reset();
  }
}
