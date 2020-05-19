/* eslint-disable class-methods-use-this */
import * as firebase from 'firebase';

import 'firebase/auth';

import { firebaseConfig } from './firebaseConfig';

class Api {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth();
  }

  public async signIn(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  public async signOut() {
    return firebase.auth().signOut();
  }

  public async signUp(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
}

export { Api };
