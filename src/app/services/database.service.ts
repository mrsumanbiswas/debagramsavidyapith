import { Injectable } from '@angular/core';
import {
  ref,
  set,
  get,
  push,
  child,
  remove,
  update,
  Database,
  DataSnapshot
} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {


  constructor(private database: Database) { }
}
