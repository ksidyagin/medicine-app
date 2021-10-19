import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss']
})
export class MyRecipesComponent implements OnInit {
  drug_names: any[] = [];
  filteredDrugNames:any[] =[];
  medication;
  drugs:any[]=[];
  recipes = [{
    number: '01-01-0101',
    medication: 'Коделак',
    doctor: 'Иванов Иван Сергеевич',
    date: '19.08.21'
  },
  {
    number: '01-01-0102',
    medication: 'Солпадеин',
    doctor: 'Иванчук Илья Сергеевич',
    date: '19.08.20'
  }]

  flagVisibleForm = false;
  constructor(private http: HttpClient, private changeDetection: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.http.get('../../../assets/drugnames.json').subscribe((data:any)=>{
      this.drug_names = data.items;
      console.log(this.drug_names);
    })
  }

  visible() {
    this.flagVisibleForm = true;
  }

  nonVisible() {
    this.flagVisibleForm = false;
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
  addMedication() {
    console.log(this.medication);
    this.drugs.push(this.medication);
    this.changeDetection.detectChanges();
    }


}
