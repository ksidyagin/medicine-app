import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AppService} from "../../app.service";
import { FilterService } from 'primeng/api';
import { SearchTypeService } from '../main/searchservice';
import { ActiveTypeService } from '../drug-store/activeservice';
import { GroupTypeService } from '../drug-store/groupservice';
import { EditionTypeService } from '../drug-store/editionservice';
import { GenericTypeService } from '../drug-store/genericservice';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-drug-interactions',
  templateUrl: './drug-interactions.component.html',
  styleUrls: ['./drug-interactions.component.scss']
})
export class DrugInteractionsComponent implements OnInit {
  API = 'https://datahackapi.herokuapp.com';
  medication = '';
  medicalCards: any[] =[];
  mygenerics:any[] = [];
  gen: any;
  card: any;
  vzaimod: any;

  drugs:any[]=[];
  drug_cards:any[] = [];
  drug_names:any[] = [];
  filteredDrugNames:any[] =[];
  fio = localStorage.getItem('fio');
  chronicle = localStorage.getItem('chronicle');
  food_components: boolean = false;
  spirt: boolean = false;
  nikotin: boolean = false;
  isProgress: boolean = false;
  compatibilityIsOpened: boolean = false;
  // active-type

  selectedActive: any;

  actives: any[] = [];

  filteredActives: any[] = [];

  selectedActives: any[] = [];

  selectedActiveAdvanced= '';

  // group-type

  selectedGroup: any;

  groups: any[] = [];

  filteredGroups: any[] = [];

  selectedGroups: any[] = [];

  selectedGroupAdvanced = '';

  // edition-type

  selectedEdition: any;

  editions: any[] = [];

  filteredEditions: any[] = [];

  selectedEditions: any[] = [];

  selectedEditionAdvanced = '';

  // generic-type

  selectedGeneric: any;

  generics: any[] = [];

  filteredGenerics: any[] = [];

  selectedGenerics: any[] = [];

  selectedGenericAdvanced: any[] = [];

  constructor(private servise: AppService,
              // active-type
              private activeTypeService: ActiveTypeService,
              // group-type
              private groupTypeService: GroupTypeService,
              // edition-type
              private editionTypeService: EditionTypeService,
              // generic-type
              private genericTypeService: GenericTypeService, private http: HttpClient,
              private changeDetection: ChangeDetectorRef) { }

  ngOnInit(): void {
    // active-type
    this.activeTypeService.getActives().then(actives => {
      this.actives = actives;
    });

    this.http.get('../../../assets/drugnames.json').subscribe((data:any)=>{
      this.drug_names = data.items;
      console.log(this.drug_names);
    })


    // group-type
    this.groupTypeService.getGroups().then(groups => {
      this.groups = groups;
    });

    // edition-type
    this.editionTypeService.getEditions().then(editions => {
      this.editions = editions;
    });

    // generic-type
    this.genericTypeService.getGenerics().then(generics => {
      this.generics = generics;
    });
  }
  delMedication(item){
    this.drugs.splice(this.drugs.indexOf(item.name,1));
    this.drug_cards.splice(this.drug_cards.indexOf(item,1));
  }

  addMedication() {
    console.log(this.medication);
    this.drugs.push(this.medication);
    this.http.get(this.API + '/get_drug_iteraction?name=' + this.medication+'&food='+this.food_components+'&alcohol='+this.spirt+'&nicotine='+this.nikotin).subscribe((data:any)=>{
      console.log(data);
      let card = data.items[0];
      card["contraindicated"]= '';
      card["carefully"]= '';
      card["allowed"]= '';
      card["compatibility"] = false;
      card["compatibilities"] = [];
      let option = data.items[0].protivopokazania.c;
      if(option === 1){
        card.allowed += 'c';
      }else if (option === 2){
        card.carefully += 'c';
      }else if (option === 3){
        card.contraindicated += 'c';
      }

      option = data.items[0].protivopokazania.l;
      if(option === 1){
        card.allowed += 'l';
      }else if (option === 2){
        card.carefully += 'l';
      }else if (option === 3){
        card.contraindicated += 'l';
      }

      option = data.items[0].protivopokazania.n;
      if(option === 1){
        card.allowed += 'n';
      }else if (option === 2){
        card.carefully += 'n';
      }else if (option === 3){
        card.contraindicated += 'n';
      }

      option = data.items[0].protivopokazania.o;
      if(option === 1){
        card.allowed += 'o';
      }else if (option === 2){
        card.carefully += 'o';
      }else if (option === 3){
        card.contraindicated += 'o';
      }

      option = data.items[0].protivopokazania.p;
      if(option === 1){
        card.allowed += 'p';
      }else if (option === 2){
        card.carefully += 'p';
      }else if (option === 3){
        card.contraindicated += 'p';
      }

      option = data.items[0].protivopokazania.r;
      if(option === 1){
        card.allowed += 'r';
      }else if (option === 2){
        card.carefully += 'r';
      }else if (option === 3){
        card.contraindicated += 'r';
      }
      console.log(option);
      this.drug_cards.push(card);

      this.changeDetection.detectChanges();
      console.log(this.drug_cards);
    })
  }

  filterActive(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.actives.length; i++) {
      let active = this.actives[i];
      if (active.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(active);
      }
    }

    this.filteredActives = filtered;
  }
  filterDrugName(event:any){
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.drug_names.length; i++) {
      let active = this.drug_names[i];
      if (active.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(active);
      }
    }

    this.filteredDrugNames = filtered;
  }

  filterGroup(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.groups.length; i++) {
      let group = this.groups[i];
      if (group.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(group);
      }
    }

    this.filteredGroups = filtered;
  }


  filterEdition(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.editions.length; i++) {
      let edition = this.editions[i];
      if (edition.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(edition);
      }
    }

    this.filteredEditions = filtered;
  }

  filterGeneric(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.generics.length; i++) {
      let generic = this.generics[i];
      if (generic.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(generic);
      }
    }

    this.filteredGenerics = filtered;
  }


  //
  info: boolean = false;

  checkInfo() {
    console.log(this.drugs);
    let str = '';
    for (let i = 0; i < this.drugs.length; i++){
      str += this.drugs[i];
      if(i < this.drugs.length-1){
        str += ','
      }
    }
    this.http.get(this.API + '/check_drug_reaction?drugs=' + str).subscribe((data:any)=>{
      console.log(data);
      this.vzaimod = data.items;
      this.info = true;
      this.changeDetection.detectChanges();
    })
  }

  displayBasic: boolean = false;
  instructionIsOpened: boolean = false;
  showBasicDialog() {
    this.displayBasic = true;
  }
  showInstruction(med){
    this.instructionIsOpened = true;
  }
  // footer

  footer= '';

  footerInteraction() {
    let str = '';
    for(let i = 0; i < this.drugs.length; i++){
      str += this.drugs[i];
      if(i < this.drugs.length-1){
        str += ',';
      }
    }
    console.log(str);
    this.http.get(this.API + '/find_druds_analogs?names=' + str ).subscribe((data:any)=>{
      console.log(data);
      this.medicalCards = data.items;
      this.changeDetection.detectChanges();
    })
    if (this.footer===''||this.footer==='generic') {
      this.footer='interaction';
    }
  }

  searchMedicalCards(){
      if(this.selectedGroupAdvanced === '' &&
      this.selectedActiveAdvanced === '' &&
      this.selectedEditionAdvanced === ''
      ){
        return;
      }
      if(this.selectedActiveAdvanced != ''){
        this.http.get(this.API + '/find_drugs?activestuff=' + this.selectedActiveAdvanced).subscribe((data:any)=>{
          this.medicalCards = data.items;
          this.selectedActiveAdvanced = '';
          this.changeDetection.detectChanges();
          console.log(this.medicalCards);
        })
      }
      if(this.selectedGroupAdvanced != ''){
        this.http.get(this.API + '/find_drugs?clinicgroup=' + this.selectedGroupAdvanced).subscribe((data:any)=>{
          this.medicalCards = data.items;
          this.selectedGroupAdvanced = ''
          this.changeDetection.detectChanges();
          console.log(this.medicalCards);
        })
      }
      if(this.selectedEditionAdvanced != ''){
        this.http.get(this.API + '/find_drugs?farmakogroup=' + this.selectedEditionAdvanced).subscribe((data:any)=>{
          this.medicalCards = data.items;
          this.selectedEditionAdvanced = ''
          this.changeDetection.detectChanges();
          console.log(this.medicalCards);
        })
      }
  }

  footerGeneric() {

  }

  is_food_components(){
    this.food_components = !this.food_components;
  }
  is_spirt(){
    this.spirt = !this.spirt;
  }
  is_nikotin(){
    this.nikotin = !this.nikotin;
  }

  compatibility__func(med){
    this.http.get(this.API + '/check_contraindications?name=' + med.name + '&contr=["' + this.chronicle + '"]').subscribe((data:any)=>{
      console.log(data.items);
      med.compatibility  = data.items.contraindications;
      med.compatibilities = data.items.chronic;
      this.changeDetection.detectChanges();

    })

  }

  checkInteraction(card: any){
    this.http.get(this.API + '/get_drug_iteraction?name=' + card.name+'&food='+this.food_components+'&alcohol='+this.spirt+'&nicotine='+this.nikotin).subscribe((data:any)=>{
      console.log(data);
      let cart = card;
      cart["contraindicated"]= '';
      cart["carefully"]= '';
      cart["allowed"]= '';
      cart["compatibility"] = false;
      cart["compatibilities"] = [];
      let option = data.items[0].protivopokazania.c;
      if(option === 1){
        cart.allowed += 'c';
      }else if (option === 2){
        cart.carefully += 'c';
      }else if (option === 3){
        cart.contraindicated += 'c';
      }

      option = data.items[0].protivopokazania.l;
      if(option === 1){
        cart.allowed += 'l';
      }else if (option === 2){
        cart.carefully += 'l';
      }else if (option === 3){
        cart.contraindicated += 'l';
      }

      option = data.items[0].protivopokazania.n;
      if(option === 1){
        cart.allowed += 'n';
      }else if (option === 2){
        cart.carefully += 'n';
      }else if (option === 3){
        cart.contraindicated += 'n';
      }

      option = data.items[0].protivopokazania.o;
      if(option === 1){
        cart.allowed += 'o';
      }else if (option === 2){
        cart.carefully += 'o';
      }else if (option === 3){
        cart.contraindicated += 'o';
      }

      option = data.items[0].protivopokazania.p;
      if(option === 1){
        cart.allowed += 'p';
      }else if (option === 2){
        cart.carefully += 'p';
      }else if (option === 3){
        cart.contraindicated += 'p';
      }

      option = data.items[0].protivopokazania.r;
      if(option === 1){
        cart.allowed += 'r';
      }else if (option === 2){
        cart.carefully += 'r';
      }else if (option === 3){
        cart.contraindicated += 'r';
      }
      console.log(option);
      this.drug_cards.push(cart);

    this.changeDetection.detectChanges();
    })
    this.drugs.push(card.name);
    this.checkInfo();
  }

}
