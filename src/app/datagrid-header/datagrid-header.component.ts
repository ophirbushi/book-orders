import { Component, Input } from '@angular/core';
import { StateService } from '../shared/state.service'

@Component({
  selector: 'app-datagrid-header',
  templateUrl: './datagrid-header.component.html',
  styleUrls: ['./datagrid-header.component.scss']
})
export class DatagridHeaderComponent {
  @Input() show_filter: boolean | undefined = false;

  constructor(private state: StateService) {}
  
  onChange($event: any) {
    if (!$event.target) return;
    this.state.setFilterValue($event.target.value);
  }
}
