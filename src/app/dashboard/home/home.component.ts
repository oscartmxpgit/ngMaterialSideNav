import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public  http :HttpClient) { }

  res:any;
  info_calendar:any;

  ngOnInit(): void {

    this.http.get('http://calapi.inadiutorium.cz/api/v0/la/calendars/general-en/today').subscribe((res)=>{
            console.log(res);
            this.info_calendar= res;
        },
        error => {
          console.error('Request failed with error')

        }
        );
      }
}
