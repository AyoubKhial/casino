import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private categorySource = new BehaviorSubject('');
    public currentCategory = this.categorySource.asObservable();

    constructor() { }

    public changeCategory = (category: string): void => {
        this.categorySource.next(category);
    };
}