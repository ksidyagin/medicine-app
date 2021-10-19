import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastritis',
  templateUrl: './gastritis.component.html',
  styleUrls: ['./gastritis.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GastritisComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  specialized__question:boolean = false;
  que_all:boolean=false;
  
  specialized__question_five:boolean = false;
  que_five:boolean = false;
  que_six:boolean = false;
  que_no_five:boolean = false;
  que_no_six:boolean = false;
  count=0;
  count_one=0;
  que_one:boolean=false;
  que_5:boolean=false;
  que_7: boolean = false;
  result:boolean;
  count_two_block=0;
  tmp_six=5;//0-false, 1-true, 5- нейтраль
  tmp_five=5;//0-false, 1-true, 5- нейтраль
  check_btn:boolean=false;
  que_8_12: boolean = false;
  specialized__que_yes() {
    if (this.specialized__question === false) {
      this.specialized__question = true;
      
    }
    if (this.que_all === false) {
      this.que_all = true;
    }

    this.count_one=this.count_one+1;
      console.log(this.count_one);

    if(this.count_one===1)
    { 
      this.que_one=true;
    }
   
    if(this.count_one===5)
    {
      this.que_5=true;
    }
  }
  count_fun()
  {
    this.count_two_block= this.count_two_block+1;
  }
  check()
  {
    if(this.que_one===true)
    {
      this.router.navigate(['', 'online-appointment-patient','specialized']);
    }
    if(this.que_5===true)
    {
      this.router.navigate(['', 'online-appointment-patient','gastritis']);
    }
    if(this.count===7)
    {
      this.result=true;
    }
  }

  fun_12()
  {
    if(this.count_two_block===7 && this.tmp_five===0 && this.tmp_six===0)
    {
      this.check_btn=true;
      
    }
    this.count_two_block= this.count_two_block+1;
  }

  fun_16()
  {
    if(this.count_two_block===14 && this.tmp_five===1 && this.tmp_six===0)
    {
      this.check_btn=true;
    }
    
  }

  fun_21()
  {
    if((this.count_two_block===18 || this.count_two_block===12) && ((this.tmp_five===1 && this.tmp_six===1) || (this.tmp_five===0 && this.tmp_six===1)))
      {
        this.check_btn=true;
      }
  }

 
  specialized__que_no() {
    if (this.specialized__question === true) {
      this.specialized__question = false;
     
    }
    if (this.que_all === true) {
      this.que_all = false;
    }
    this.count_one=this.count_one+1;
      console.log(this.count_one);
  }

  general__que_all_yes() {
    if (this.que_all === false) {
      this.que_all = true;
    }
  }

  general__que_all_no() {
    if (this.que_all === true) {
      this.que_all = false;
      }
  }

  general__que_five_yes() {
    if (this.que_no_five === false) {
      this.que_no_five = true;
      this.que_five=true;
    
    }
    this.count_two_block= this.count_two_block+1;
    this.tmp_five=1;
  }

  general__que_five_no() {
    if (this.que_no_five === true) {
      this.que_no_five = false;
     
    }
    this.count_two_block= this.count_two_block+1;
    this.tmp_five=0;
  }

  general__que_six_yes() {
    if (this.que_no_six === false) {
      this.que_no_six = true;
      this.que_six=true;
    }
    this.count_two_block= this.count_two_block+1;
    this.tmp_six=1;
  }

  general__que_six_no() {
    if (this.que_no_six === true) {
      this.que_no_six = false;
     
    }
    this.count_two_block= this.count_two_block+1;
    this.tmp_six=0;
  }
  
  que7_yes(){
    this.que_7 = true;
  }
  que7_no(){
    this.que_7 = false;
  }
  que_8_12_yes(){
    this.que_8_12 = true;
  }


  saveDiagnos(){
    if( (this.specialized__question || this.que_all) &&  !this.que_7 && this.que_8_12){
      localStorage.setItem('first-diagnos', ' Рекомендуется: 1)Сдать общий анализ крови; 2)Сдать копрограмму; 3)Сдать биохимический анализ крови: билирубин, Алат, Асат, щелочная фосфатаза, гамма-глютамилтранспептидаза, амилаза; 4)Фиброгастродуоденоскопия с исследованием на пилорический хеликобактер; 5)УЗИ органов брюшной полости; 6)Консультация гастроэнтеролога или терапевта для определения дальнейшей тактики ведения');
    }
    else{
      localStorage.setItem('first-diagnos', '');
    }
  }


}
