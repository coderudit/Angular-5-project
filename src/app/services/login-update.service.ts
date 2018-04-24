import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginUpdateService {
    public subject: any = new Subject();
    public observer: any;

    constructor() {
        this.observer = this.subject.asObservable();
    }

    update(data) {
        this.subject.next(data);
    }
 }
