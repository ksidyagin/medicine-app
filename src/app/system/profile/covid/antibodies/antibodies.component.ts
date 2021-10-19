import { Component, OnInit } from '@angular/core';
import { SelectItem, PrimeNGConfig } from "primeng/api";
import { MenuItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import { FilterService } from 'primeng/api';
import { RegionService } from './regionservice';
import { LocalityService } from './localityservice';
import { InstitutionTypeService } from './institutiontypeservice';
import { InstitutionNameService } from './institutionnameservice';

@Component({
  selector: 'app-antibodies',
  templateUrl: './antibodies.component.html',
  styleUrls: ['./antibodies.component.scss'],
  providers: [RegionService, LocalityService, InstitutionTypeService, InstitutionNameService, FilterService]
})
export class AntibodiesComponent implements OnInit {



  // region

  selectedRegion: any;

  regions: any[];

  filteredRegions: any[];

  selectedRegions: any[];

  selectedRegionAdvanced: any[];

  // locality

  selectedLocality: any;

  localitys: any[];

  filteredLocalitys: any[];

  selectedLocalitys: any[];

  selectedLocalityAdvanced: any[];

  // institutiontype

  selectedInstitutionType: any;

  institutiontypes: any[];

  filteredInstitutionTypes: any[];

  selectedInstitutionTypes: any[];

  selectedInstitutionTypeAdvanced: any[];

  // institutionname

  selectedInstitutionName: any;

  institutionnames: any[];

  filteredInstitutionNames: any[];

  selectedInstitutionNames: any[];

  selectedInstitutionNameAdvanced: any[];

  constructor(
    private filterService: FilterService,
    // region
    private regionService: RegionService,

    // locality
    private localityService: LocalityService,

    // institutiontype
    private institutiontypeService: InstitutionTypeService,

    // institutionname
    private institutionnameService: InstitutionNameService,
  ) { }

  ngOnInit(): void {
    // region
    this.regionService.getRegions().then(regions => {
      this.regions = regions;
    });

    // locality
    this.localityService.getLocalitys().then(localitys => {
      this.localitys = localitys;
    });

    // institutiontype
    this.institutiontypeService.getInstitutionTypes().then(institutiontypes => {
      this.institutiontypes = institutiontypes;
    });

    // institutionname
    this.institutionnameService.getInstitutionNames().then(institutionnames => {
      this.institutionnames = institutionnames;
    });
  }

  filterRegion(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.regions.length; i++) {
      let region = this.regions[i];
      if (region.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(region);
      }
    }

    this.filteredRegions = filtered;
  }

  filterLocality(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.localitys.length; i++) {
      let locality = this.localitys[i];
      if (locality.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(locality);
      }
    }

    this.filteredLocalitys = filtered;
  }

  filterInstitutionType(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.institutiontypes.length; i++) {
      let institutiontype = this.institutiontypes[i];
      if (institutiontype.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(institutiontype);
      }
    }

    this.filteredInstitutionTypes = filtered;
  }

  filterInstitutionName(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.institutionnames.length; i++) {
      let institutionname = this.institutionnames[i];
      if (institutionname.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(institutionname);
      }
    }

    this.filteredInstitutionNames = filtered;
  }

  covid_test = 'IgM';

  covidTestIgM() {
    this.covid_test = 'IgM';
  }

  covidTestIgG() {
    this.covid_test = 'IgG';
  }

  covidTestAfterVac() {
    this.covid_test = 'AfterVac';
  }

}
