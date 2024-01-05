import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatagridHeaderComponent } from './datagrid-header.component';

@NgModule({
  declarations: [
    DatagridHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DatagridHeaderComponent
  ]
})
export class DatagridHeaderModule { }
