import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { RouterModule } from '@angular/router'
import { MatCardModule } from '@angular/material/card'
import { AgGridModule } from 'ag-grid-angular'



@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: HomeComponent }]),
        MatCardModule,
        AgGridModule
    ]
})
export class HomeModule { }
