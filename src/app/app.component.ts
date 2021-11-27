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

  getMotivoCambioPlan(){
    return this.http.get(this.urlServer + "/motivoCambioPlan")
    .subscribe((data: any) => {
      this.jsonResponse = JSON.stringify(data)
    })
  }

  getLugarTicketCambioPlan(){
    return this.http.get(this.urlServer + "/lugarTicketCambioPlan")
    .subscribe((data: any) => {
      this.jsonResponse = JSON.stringify(data)
    })
  }

  getBeneficiosClientes(){
    return this.http.get(this.urlServer + "/beneficiosClientes")
    .subscribe((data: any) => {
      this.jsonResponse = JSON.stringify(data)
    })
  }

  getOperacionesFallidas(){
    return this.http.get(this.urlServer + "/operacionesFallidas")
    .subscribe((data: any) => {
      this.jsonResponse = JSON.stringify(data)
    })
  }

  getClientesEnEEUU(){
    return this.http.get(this.urlServer + "/clientesEnEEUU")
    .subscribe((data: any) => {
      this.jsonResponse = JSON.stringify(data)
    })
  }

  getCapitalFlorida(){
    return this.http.get(this.urlServer + "/capitalFlorida")
    .subscribe((data: any) => {
      this.jsonResponse = JSON.stringify(data)
    })
  }

  getTicketsFibraOptica(){
    return this.http.get(this.urlServer + "/ticketsFibraOptica")
    .subscribe((data: any) => {
      this.jsonResponse = JSON.stringify(data)
    })
  }
}
