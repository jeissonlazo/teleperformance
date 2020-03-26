import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReportHoursService {
    private URL = 'http://localhost:3000/api';
    constructor(private http:HttpClient) { }

    reportHours (hours){
        return this.http.post<any>(this.URL + '/hours', hours)
    }

    getTable (){
        return this.http.get<any>(this.URL + '/getHours')
    }

}
