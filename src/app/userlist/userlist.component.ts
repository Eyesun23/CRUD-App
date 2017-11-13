import { Component, OnInit } from '@angular/core';
import {UserService} from '../users.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})

export class UserlistComponent implements OnInit {
  users:User;
  constructor(private userSer: UserService) { }

  ngOnInit() {
    this.getUsers().subscribe(val => this.users = val)
  }

  getUsers():Observable<any> {
    return this.userSer.getUsers();
  }

  removeUser(key){
    this.userSer.deleteUser(key)
  }
}
