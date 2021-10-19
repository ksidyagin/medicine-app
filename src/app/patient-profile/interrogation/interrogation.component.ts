import { Component, OnInit } from '@angular/core';
import {PatientService} from '../patient.service';

@Component({
  selector: 'app-interrogation',
  templateUrl: './interrogation.component.html',
  styleUrls: ['./interrogation.component.scss']
})
export class InterrogationComponent implements OnInit {
  anket:any;
  constructor(private service: PatientService) { }

  ngOnInit(): void {
  }

  get_anket(id){
    this.service.get_anket(id).subscribe(value => {
      this.anket = value;
      console.log(this.anket);
    })
  }

}
