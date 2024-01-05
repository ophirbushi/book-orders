import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { signal } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    userType = 'admin'
    constructor(private dialog: MatDialog) { }

}
