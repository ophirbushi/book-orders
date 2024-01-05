/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from "@angular/core";
import { StateService } from "../shared/state.service";
import { ColDef, GridOptions } from "ag-grid-community";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  gridOptions: GridOptions = {
    enableRtl: true,
    animateRows: true,
    defaultColDef: {
      sortable: true,
      filter: "agTextColumnFilter",
      menuTabs: ["filterMenuTab"],
    },
    rowSelection: "multiple",
  };

  columnDefs: ColDef<any>[] = [
    {
      field: "firstName",
      headerName: "שם פרטי",
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    { field: "lastName", headerName: "שם משפחה" },
    { field: "phone", headerName: "טלפון" },
    { field: "email", headerName: 'דוא"ל' },
    { field: "quantity", headerName: "כמות" },
    { field: "uid", headerName: "uid" },
    { field: "order", headerName: "הזמנה" },
    { field: "suspicious", headerName: "חשוד" },
    { field: "blacklist", headerName: "חסום" },
    { field: "status", headerName: "תהליך הסתיים" },
    {
      headerName: "עוד מידע",
      cellRenderer: () => `<button class="btn btn-secondary">?</button>`,
    },
  ];

  rowData: any[] = [
    {
      firstName: "יונתן",
      lastName: "איתמר",
      phone: "054-1112234",
      email: "yi@gmail.com",
      quantity: 4,
      uid: 0,
      order: "ברית חדשה",
      suspicious: false,
      blacklist: false,
      status: true,
    },
    {
      firstName: "חגית",
      lastName: "מיכאל",
      phone: "054-1112234",
      email: "hm@gmail.com",
      quantity: 12,
      uid: 1,
      order: "ברית חדשה",
      suspicious: false,
      blacklist: false,
      status: false,
    },
    {
      firstName: "צחי",
      lastName: "שי",
      phone: "054-1112234",
      email: "ts@gmail.com",
      quantity: 9,
      uid: 2,
      order: "ברית חדשה",
      suspicious: false,
      blacklist: false,
      status: true,
    },
    {
      firstName: "יונתן",
      lastName: "איתמר",
      phone: "054-1112234",
      email: "yi@gmail.com",
      quantity: 4,
      uid: 3,
      order: "ברית חדשה",
      suspicious: false,
      blacklist: true,
      status: false,
    },
    {
      firstName: "חגית",
      lastName: "מיכאל",
      phone: "054-1112234",
      email: "hm@gmail.com",
      quantity: 12,
      uid: 4,
      order: "ברית חדשה",
      suspicious: false,
      blacklist: false,
      status: true,
    },
    {
      firstName: "צחי",
      lastName: "שי",
      phone: "054-1112234",
      email: "ts@gmail.com",
      quantity: 9,
      uid: 5,
      order: "ברית חדשה",
      suspicious: false,
      blacklist: false,
      status: false,
    },
    {
      firstName: "יונתן",
      lastName: "איתמר",
      phone: "054-1112234",
      email: "yi@gmail.com",
      quantity: 4,
      uid: 6,
      order: "ברית חדשה",
      suspicious: true,
      blacklist: false,
      status: false,
    },
    {
      firstName: "חגית",
      lastName: "מיכאל",
      phone: "054-1112234",
      email: "hm@gmail.com",
      quantity: 12,
      uid: 7,
      order: "ברית חדשה",
      suspicious: false,
      blacklist: false,
      status: false,
    },
    {
      firstName: "צחי",
      lastName: "שי",
      phone: "054-1112234",
      email: "ts@gmail.com",
      quantity: 9,
      uid: 8,
      order: "ברית חדשה",
      suspicious: false,
      blacklist: false,
      status: true,
    },
  ];

  filteredData: any[] = [];

  constructor(private state: StateService) {}

  ngOnInit(): void {
    this.state.filterValue$.subscribe((filterValue) => {
      this.filteredData = this.filterData(filterValue);
    });
  }

  filterData(filterValue: string): any {
    switch (filterValue) {
      case "all":
        return [...this.rowData];
      case "active":
        return this.rowData.filter((row) => row.status === false);
      case "finished":
        return this.rowData.filter((row) => row.status === true);
      default:
        break;
    }
    return [];
  }
}
