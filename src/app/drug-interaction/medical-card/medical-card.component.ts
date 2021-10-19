import { Component, OnInit } from '@angular/core';
import { FilterService } from 'primeng/api';
import { SearchTypeService } from '../main/searchservice';

@Component({
  selector: 'app-medical-card',
  templateUrl: './medical-card.component.html',
  styleUrls: ['./medical-card.component.scss'],
  providers: [SearchTypeService, FilterService]
})
export class MedicalCardComponent implements OnInit {

      // search-type

      selectedSearch: any;

      searchs: any[] = [];
  
      filteredSearchs: any[] = [];
  
      selectedSearchs: any[] = [];
  
      selectedSearchAdvanced: any[] = [];
  

  constructor(
    // search-type
    private searchTypeService: SearchTypeService,
  ) { }

  ngOnInit(): void {
    // search-type
    this.searchTypeService.getSearchs().then(searchs => {
      this.searchs = searchs;
    });
  }

  filterSearch(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.searchs.length; i++) {
      let search = this.searchs[i];
      if (search.lastName.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(search);
      }
    }

    this.filteredSearchs = filtered;
  }

}
