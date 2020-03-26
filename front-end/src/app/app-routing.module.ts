import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import {ReportHoursComponent} from './components/report-hours/report-hours.component';
import {TableComponent} from './components/table/table.component';


const routes: Routes = [
    {
        path: '',
        component: ReportHoursComponent
    },
    {
        path: 'hours',
        component: ReportHoursComponent
    },
    {
        path: 'table',
        component: TableComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
