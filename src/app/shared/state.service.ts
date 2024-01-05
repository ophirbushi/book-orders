import { Injectable, signal } from '@angular/core'
import { DatabaseService } from './database.service'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StateService {
    private filterValueSubject: BehaviorSubject<string> = new BehaviorSubject<string>('all');
    public filterValue$: Observable<string> = this.filterValueSubject.asObservable();
  
    setFilterValue(value: string): void {
      this.filterValueSubject.next(value);
    }

    constructor(private database: DatabaseService) { }

    async init() {

    }
}