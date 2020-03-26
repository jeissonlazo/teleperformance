import { Component, OnInit } from '@angular/core';
import { ReportHoursService } from '../../services/report-hours.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-hours',
  templateUrl: './report-hours.component.html',
  styleUrls: ['./report-hours.component.scss']
})
export class ReportHoursComponent implements OnInit {
    public hours = {
        EmploymentId: Number,
        Names: '',
        startDate: '',
        endDate: '',
        startTurn: Number,
        endTurn:Number,
        startTime: Number,
        endTime: Number,
        reason: ''
    }	
    constructor(
        private reportHoursSer: ReportHoursService,
        private router: Router
        ) { }

    ngOnInit(): void {
    }

    reportHours(){
        this.reportHoursSer.reportHours(this.hours)
        .subscribe(
            res =>{
                this.router.navigate(['/table'])
            },
            err  => {
                console.log(err)
            }
        )
    }

}
