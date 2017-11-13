import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import * as firebase from 'firebase';

@Injectable()
export class UserService {
    usersRef: AngularFireList<any>;
    users: Observable<User[]>;

    constructor(private db: AngularFireDatabase) {
      this.usersRef = this.db.list('/users');

    }

    saveUser(obj: User, file) {
     const storageRef = firebase.storage().ref();
     const uploadTask = storageRef.child('users/' + file[0].name).put(file[0]).then((snapshot) => {
            obj.imageurl = snapshot.downloadURL;
            this.usersRef.push(obj);
     });
    }

    getUsers() {
        return this.usersRef.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
    }

    updateUser(key, obj: User) {
        this.usersRef.update(key, obj);
    }

    getUser(id) {
        return this.db.object('/users/' + id).valueChanges()
    }

    deleteUser(key: string) {
        this.usersRef.remove(key);
    }
}
