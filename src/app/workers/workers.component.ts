import { Component } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community'

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent {
  gridOptions: GridOptions = {
    enableRtl: true,
    animateRows: true,
    defaultColDef: {
        sortable: true,
        filter: 'agTextColumnFilter',
        menuTabs: ['filterMenuTab'],
    },
    rowSelection: 'multiple'
  }
  columnDefs: ColDef<any>[] = [
      { field: 'firstName', headerName: 'שם פרטי', checkboxSelection: true, headerCheckboxSelection: true },
      { field: 'lastName', headerName: 'שם משפחה' },
      { field: 'phone', headerName: 'טלפון' },
      { field: 'email', headerName: 'דוא"ל' },
      { field: 'wid', headerName: 'wid' },
      { field: 'lastActive', headerName: 'פעיל פעם אחרונה' },
      { headerName: 'עוד מידע', cellRenderer: () => `<button class="btn btn-secondary">?</button>` }
  ]
  rowData = [
      { firstName: 'יונתן', lastName: 'איתמר', phone: '054-1112234', email: 'yi@gmail.com', wid: 0, lastActive: Date.now() },
      { firstName: 'חגית', lastName: 'מיכאל', phone: '054-1112234', email: 'hm@gmail.com', wid: 1, lastActive: Date.now()  },
      { firstName: 'צחי', lastName: 'שי', phone: '054-1112234', email: 'ts@gmail.com', wid: 2, lastActive: Date.now() },
      { firstName: 'יונתן', lastName: 'איתמר', phone: '054-1112234', email: 'yi@gmail.com', wid: 3, lastActive: Date.now() },
      { firstName: 'חגית', lastName: 'מיכאל', phone: '054-1112234', email: 'hm@gmail.com', wid: 4, lastActive: Date.now() },
      { firstName: 'צחי', lastName: 'שי', phone: '054-1112234', email: 'ts@gmail.com',  wid: 5, lastActive: Date.now() },
      { firstName: 'יונתן', lastName: 'איתמר', phone: '054-1112234', email: 'yi@gmail.com', wid: 6, lastActive: Date.now() },
      { firstName: 'חגית', lastName: 'מיכאל', phone: '054-1112234', email: 'hm@gmail.com', wid: 7, lastActive: Date.now()  },
      { firstName: 'צחי', lastName: 'שי', phone: '054-1112234', email: 'ts@gmail.com' , wid: 8, lastActive: Date.now() }
  ]
}
