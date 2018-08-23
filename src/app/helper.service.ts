import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor( public snackBar: MatSnackBar) { }
  showSnackbar(msg: string) {
    this.snackBar.open(msg, 'OK', {
      duration: 2000,
    });
  }
}
