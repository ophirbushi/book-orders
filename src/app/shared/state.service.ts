import { Injectable } from '@angular/core'
import { DatabaseService } from './database.service'

@Injectable({
    providedIn: 'root'
})
export class StateService {
    constructor(private database: DatabaseService) { }

    async init() {

    }
}