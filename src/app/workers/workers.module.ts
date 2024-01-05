import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersComponent } from './workers.component';
import { RouterModule } from '@angular/router'
import { MatCardModule } from '@angular/material/card'
import { AgGridModule } from 'ag-grid-angular'
import { DatagridHeaderModule } from '../datagrid-header/datagrid-header.module';


@NgModule({
  declarations: [
    WorkersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WorkersComponent }]),
    MatCardModule,
    AgGridModule,
    DatagridHeaderModule
  ]
})
export class WorkersModule { }
