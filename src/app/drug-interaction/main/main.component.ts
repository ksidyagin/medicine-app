import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { SelectItem, PrimeNGConfig } from "primeng/api";
import { MenuItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import { FilterService } from 'primeng/api';
import { SearchTypeService } from './searchservice';
import { GenderTypeService } from './genderservice';
import { ChronicTypeService } from './chronicservice';
import { AlergicTypeService } from './alergicservice';
import { DiagnosisTypeService } from './diagnosisservice';
import {AppService} from "../../app.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'druginteraction-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [SearchTypeService, GenderTypeService, ChronicTypeService, AlergicTypeService, DiagnosisTypeService, FilterService]
})
export class DrugInteractionMainComponent implements OnInit {
    API = 'https://datahackapi.herokuapp.com';

    mainForm: FormGroup = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      patronymic: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      chronic: new FormControl(null, [Validators.required]),
      alergic: new FormControl(null, [Validators.required]),
      smoking: new FormControl(null, [Validators.required]),
      numberOfCigarettes: new FormControl(null, [Validators.required]),
      alcohol: new FormControl(null, [Validators.required]),
      pregnancy: new FormControl(null, [Validators.required]),
      gestationalAge: new FormControl(null, [Validators.required]),
      lactation: new FormControl(null, [Validators.required]),
      diagnosis: new FormControl(null, [Validators.required]),
    });;

    // search-type

    selectedSearch: any;
    selectedUser: any;
    searchs: any[] = [];

    filteredSearchs: any[] = [];

    selectedSearchs: any[] = [];

    selectedSearchAdvanced: any[] = [];

    // gender-type

    selectedGender: any;

    genders: any[] = [];

    filteredGenders: any[] = [];

    selectedGenders: any[] = [];

    selectedGenderAdvanced: any[] = [];

    // chronic-type

    selectedChronic: string;

    chronics: any[] = [];

    filteredChronics: any[] = [];

    selectedChronics: any[] = [];

    selectedChronicAdvanced: any[] = [];

    // alergic-type

    selectedAlergic: any;

    alergics: any[] = [];

    filteredAlergics: any[] = [];

    selectedAlergics: any[] = [];

    selectedAlergicAdvanced: any[] = [];

    // alergic-type

    selectedDiagnosis: any;

    diagnosises: any[] = [];

    filteredDiagnosises: any[] = [];

    selectedDiagnosises: any[] = [];

    selectedDiagnosisAdvanced: any[] = [];

    // buttons

    visitOptions: any[];

    value1: string = "new";

    flag: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    // search-type
    private searchTypeService: SearchTypeService,
    // clinic-type
    private genderTypeService: GenderTypeService,
    // chronic-type
    private chronicTypeService: ChronicTypeService,
    // alergic-type
    private alergicTypeService: AlergicTypeService,
    // alergic-type
    private diagnosisTypeService: DiagnosisTypeService,
    // buttons
    private primeNGConfig: PrimeNGConfig,
    //servise
    private service : AppService,
    private changeDetection: ChangeDetectorRef
  ) {
    this.visitOptions = [
      { label: "Новый пациент", value: "new" },
      { label: "Выбрать пациента", value: "existing" }
    ];
  }


  ngOnInit(): void {
    this.mainForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      secondName: new FormControl(null, [Validators.required]),
      patronymic: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      chronic: new FormControl(null, [Validators.required]),
      smoking: new FormControl(null, [Validators.required]),
      numberOfCigarettes: new FormControl(null, [Validators.required]),
      alcohol: new FormControl(null, [Validators.required]),
      pregnancy: new FormControl(null, [Validators.required]),
      gestationalAge: new FormControl(null, [Validators.required]),
      lactation: new FormControl(null, [Validators.required]),
      diagnosis: new FormControl(null, [Validators.required]),
    });


    // search-type
    this.searchTypeService.getSearchs().then(searchs => {
      this.searchs = searchs;
    });

    // clinic-type
    
      this.genders = ['Мужской','Женский'];

    // chronic-type
    this.chronicTypeService.getChronics().then(chronics => {
      this.chronics = chronics;
      console.log(this.chronics)
      
    });

    // alergic-type
    this.alergicTypeService.getAlergics().then(alergics => {
      this.alergics = alergics;
    });

    // diagnosis-type
    this.diagnosisTypeService.getDiagnosises().then(diagnosises => {
      this.diagnosises = diagnosises;
    });
  }

  // onSubmit() {
  //   if (this.mainForm.invalid) {
  //     return;
  //   }

  //   let fio =
  //     this.mainForm.get('lastName').value +
  //     ' ' +
  //     this.mainForm.get('firstName').value +
  //     ' ' +
  //     this.mainForm.get('patronymic').value;

  //   console.log('OK');
  // }

  filterSearch(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    let search;
    for (let i = 0; i < this.searchs.length; i++) {
      search = this.searchs[i];
      if (search.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(search);
        this.changeDetection.detectChanges();
      }
    }
    this.changeDetection.detectChanges();

    this.filteredSearchs = filtered;
    this.changeDetection.detectChanges();

  }

  selectUser(){
    console.log(this.selectedSearch);
    this.http.get(this.API + '/get_user?name=' + this.selectedSearch).subscribe((data:any)=>{
      this.changeDetection.detectChanges();
      this.selectedUser = data.items;
      console.log(this.selectedUser);
      this.changeDetection.detectChanges();
    })
  }

  addUser(){
    if(this.mainForm.disabled){
      return;
    }
    let user = {
      age: this.mainForm.get('age').value,
      alko: this.mainForm.get('alcohol').value,
      chronicle: this.mainForm.get('chronic').value,
      floor: this.mainForm.get('gender').value,
      lactation: this.mainForm.get('lactation').value,
      lastname: this.mainForm.get('secondName').value,
      name: this.mainForm.get('firstName').value,
      nikday: this.mainForm.get('numberOfCigarettes').value,
      nikotin: this.mainForm.get('smoking').value,
      padname: this.mainForm.get('patronymic').value,
      prday: this.mainForm.get('gestationalAge').value,
      pregnancy: this.mainForm.get('pregnancy').value,
    }
    this.http.get(this.API + '/set_user?age=' + user.age + '&alko=' + user.alko + '&chronicle=' + user.chronicle +
     '&floor=' + user.floor + '&lactation=' + user.lactation + '&lastname=' + user.lastname + '&name=' + user.name +
     '&nikday=' + user.nikday + '&nikotin=' + user.nikotin + '&padname=' + user.padname + '&prday=' + user.prday +
     '&pregnancy=' + user.pregnancy).subscribe((data:any)=>{
       console.log('Added User:  ', data);
       localStorage.setItem('chronicle', user.chronicle);
       let str = user.lastname + ' ' + user.name + ' ' + user.padname;
       localStorage.setItem('fio', str);

     })
  }

  filterGender(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.genders.length; i++) {
      let gender = this.genders[i];
      if (gender.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(gender);
      }
    }

    this.filteredGenders = filtered;
  }

  filterChronic(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.chronics.length; i++) {
      let chronic = this.chronics[i];
      if (chronic.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(chronic);
      }
    }

    this.filteredChronics = filtered;
  }

  filterAlergic(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.alergics.length; i++) {
      let alergic = this.alergics[i];
      if (alergic.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(alergic);
      }
    }

    this.filteredAlergics = filtered;
  }

  filterDiagnosis(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.diagnosises.length; i++) {
      let diagnosis = this.diagnosises[i];
      if (diagnosis.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(diagnosis);
      }
    }

    this.filteredDiagnosises = filtered;
  }

  // smoking

  smoke = 0;

  smokingCheked() {
    if (this.smoke===0) {
      this.smoke=1;
    }
  }

  noSmokingCheked() {
    if (this.smoke===1) {
      this.smoke=0;
    }
  }

  // smoking

  pregnancy = 0;

  pregnancyCheked() {
    if (this.pregnancy===0||this.pregnancy===-1) {
      this.pregnancy=1;
    }
  }

  noPregnancyCheked() {
    if (this.pregnancy===0||this.pregnancy===1) {
      this.pregnancy=-1;
    }
  }

  // footer

  footer: boolean = false;

  footerActive() {
    console.log(this.selectedGenderAdvanced);
    localStorage.setItem('chronicle', this.selectedUser.chronicle);
    let str = this.selectedUser.lastname + ' ' + this.selectedUser.name + ' ' + this.selectedUser.padname;
    localStorage.setItem('fio', str);

    if (this.footer===false) {
      this.footer=true;
    }

  }

  flagEvent(){
    return this.value1==='new';

  }

}
