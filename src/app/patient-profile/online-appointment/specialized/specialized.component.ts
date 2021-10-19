import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-specialized',
  templateUrl: './specialized.component.html',
  styleUrls: ['./specialized.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpecializedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  que_one:boolean = false;

  specialized__que_one_yes() {
    if (this.que_one ===false) {
      this.que_one = true;
    }
  }

  specialized__que_one_no() {
    if (this.que_one ===true) {
      this.que_one = false;
    }
  }

  que_two:boolean = false;

  specialized__que_two_yes() {
    if (this.que_two ===false) {
      this.que_two = true;
    }
  }

  specialized__que_two_no() {
    if (this.que_two ===true) {
      this.que_two = false;
    }
  }

  que_three:boolean = false;

  specialized__que_three_yes() {
    if (this.que_three ===false) {
      this.que_three = true;
    }
  }

  specialized__que_three_no() {
    if (this.que_three ===true) {
      this.que_three = false;
    }
  }

  que_four:boolean = false;

  specialized__que_four_yes() {
    if (this.que_four ===false) {
      this.que_four = true;
    }
  }

  specialized__que_four_no() {
    if (this.que_four ===true) {
      this.que_four = false;
    }
  }

  que_five:boolean = false;

  specialized__que_five_yes() {
    if (this.que_five ===false) {
      this.que_five = true;
    }
    localStorage.setItem('first-diagnos', '1)Анализ крови на ХС-ЛПНП; 2)ЭКГ покоя; ЭХОКГ; 3)Суточное мониторирование ЭКГ; 4)Консультация кардиолога для определения тактики ведения')
  }

  specialized__que_five_no() {
    if (this.que_five ===true) {
      this.que_five = false;
      localStorage.setItem('first-diagnos', '');
    }
  }

}
