import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})

export class AppComponent {
  title = 'TPGiordanoDB2';
  jsonResponse : any;
  userUrl = "";
  urlServer = "https://tp-giordano-db2.herokuapp.com/";

    constructor(private http: HttpClient) {
    this.userUrl=this.urlServer;
  }

  get() {
    return this.http.get(this.urlServer)
      .subscribe((data: any) => {
        this.jsonResponse = JSON.stringify(data)
      })
  }
}
