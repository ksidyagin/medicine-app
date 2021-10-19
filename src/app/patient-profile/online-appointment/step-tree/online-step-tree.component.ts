import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Router} from '@angular/router';
import { PatientService} from '../../patient.service';

@Component({
  selector: 'app-step-tree',
  templateUrl: './online-step-tree.component.html',
  styleUrls: ['./online-step-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineStepTreeComponent implements OnInit {
  anket: any;
  result =[];
  anketId:any;
  constructor(private router: Router, private service: PatientService) { }

  ngOnInit(): void {
    this.service.get_anket(1).subscribe(value => {
          this.anket=value;
          this.anket=this.anket.items;
          console.log(this.anket);
    })
  }
  answer(answe,question){
    answe.answer = question;
    this.result.push({'answer':question,'id':answe.id});
    console.log(this.result);
  }
  check(){
    this.anket = 1;
    var status = 'в ожидании';
    var user_id = 1;
  }

}
