import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spa-card',
  templateUrl: './spa-card.component.html',
  styleUrls: ['./spa-card.component.scss']
})
export class SpaCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sanmap: string = "cardio";

  sanMapCardio() {
    if (!(this.sanmap =="cardio")) {
      this.sanmap = "cardio"
    }
  }

  sanMapGastro() {
    if (!(this.sanmap =="gastro")) {
      this.sanmap = "gastro"
    }
  }

  sanMapPulmonary() {
    if (!(this.sanmap =="pulmonary")) {
      this.sanmap = "pulmonary"
    }
  }

  sanMapGynecology() {
    if (!(this.sanmap =="gynecology")) {
      this.sanmap = "gynecology"
    }
  }

  sanMapKidney() {
    if (!(this.sanmap =="kidney")) {
      this.sanmap = "kidney"
    }
  }
}
