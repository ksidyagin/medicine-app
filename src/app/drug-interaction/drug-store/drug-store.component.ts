import { Component, OnInit } from '@angular/core';
import { FilterService } from 'primeng/api';
import { SearchTypeService } from '../main/searchservice';
import { ActiveTypeService } from './activeservice';
import { GroupTypeService } from './groupservice';
import { PriceTypeService } from './priceservice';
import { EditionTypeService } from './editionservice';
import { GenericTypeService } from './genericservice';

@Component({
  selector: 'app-drug-store',
  templateUrl: './drug-store.component.html',
  styleUrls: ['./drug-store.component.scss'],
  providers: [SearchTypeService, ActiveTypeService, GroupTypeService, PriceTypeService, EditionTypeService, GenericTypeService, FilterService]
})
export class DrugStoreComponent implements OnInit {

  // search-type
  
  selectedSearch: any;

  searchs: any[] = [];

  filteredSearchs: any[] = [];

  selectedSearchs: any[] = [];

  selectedSearchAdvanced: any[] = [];

   // active-type
  
   selectedActive: any;

   actives: any[] = [];
 
   filteredActives: any[] = [];
 
   selectedActives: any[] = [];
 
   selectedActiveAdvanced: any[] = [];

   // group-type
  
   selectedGroup: any;

   groups: any[] = [];
 
   filteredGroups: any[] = [];
 
   selectedGroups: any[] = [];
 
   selectedGroupAdvanced: any[] = [];

   // price-type
  
   selectedPrice: any;

   prices: any[] = [];
 
   filteredPrices: any[] = [];
 
   selectedPrices: any[] = [];
 
   selectedPriceAdvanced: any[] = [];

   // edition-type
  
   selectedEdition: any;

   editions: any[] = [];
 
   filteredEditions: any[] = [];
 
   selectedEditions: any[] = [];
 
   selectedEditionAdvanced: any[] = [];

   // generic-type
  
   selectedGeneric: any;

   generics: any[] = [];
 
   filteredGenerics: any[] = [];
 
   selectedGenerics: any[] = [];
 
   selectedGenericAdvanced: any[] = [];

  constructor(
        // search-type
        private searchTypeService: SearchTypeService,
        // active-type
        private activeTypeService: ActiveTypeService,
        // group-type
        private groupTypeService: GroupTypeService,
        // price-type
        private priceTypeService: PriceTypeService,
        // edition-type
        private editionTypeService: EditionTypeService,
        // generic-type
        private genericTypeService: GenericTypeService,
  ) { }

  ngOnInit(): void {
    // search-type
    this.searchTypeService.getSearchs().then(searchs => {
      this.searchs = searchs;
    });

    // active-type
    this.activeTypeService.getActives().then(actives => {
      this.actives = actives;
    });

    // group-type
    this.groupTypeService.getGroups().then(groups => {
      this.groups = groups;
    });

    // price-type
    this.priceTypeService.getPrices().then(prices => {
      this.prices = prices;
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

  filterActive(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.actives.length; i++) {
      let active = this.actives[i];
      if (active.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(active);
      }
    }

    this.filteredActives = filtered;
  }

  filterGroup(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.groups.length; i++) {
      let group = this.groups[i];
      if (group.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(group);
      }
    }

    this.filteredGroups = filtered;
  }

  filterPrice(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.prices.length; i++) {
      let price = this.prices[i];
      if (price.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(price);
      }
    }

    this.filteredPrices = filtered;
  }

  filterEdition(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.editions.length; i++) {
      let edition = this.editions[i];
      if (edition.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
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

}
