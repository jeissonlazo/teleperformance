import { Component, OnInit } from '@angular/core';
import { ReportHoursService } from '../../services/report-hours.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    items = [];
  constructor( private reportHoursSer: ReportHoursService) { }

  ngOnInit(): void {
    this.reportHoursSer.getTable()
    .subscribe(
        res =>{
            console.log(res);
            this.items = res;
        },
        err  => {
            console.log(err)
        }
    )
  }

}
