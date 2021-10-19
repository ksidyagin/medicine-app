import { Component, OnInit } from '@angular/core';
import { FilterService } from 'primeng/api';
import { ThemeTypeService } from './themeservice';
import { DateTypeService } from './dateservice';
import { FillTypeService } from './fillservice';
interface Item {
  theme: string;
  date: string;
  filling: string;
}
@Component({
  selector: 'app-questionnaires',
  templateUrl: './questionnaires.component.html',
  styleUrls: ['./questionnaires.component.scss'],
  providers: [FilterService, ThemeTypeService, DateTypeService, FillTypeService]
})
export class QuestionnairesComponent implements OnInit {

  
  allQuestionCards: Item[] = [
    {
      theme: 'общесомантическая анкета',
      date: '21.04.2021',
      filling: 'врач'
    },
    {
      theme: 'специализированная анкета',
      date: '22.06.2021',
      filling: 'пациент'
    },
    {
      theme: 'самочувствие',
      date: '22.06.2021',
      filling: 'врач'
    }
  ]
  questionCards: Item[] = this.allQuestionCards;

  // theme-type

  selectedTheme: any;

  themes: any[] = [];

  filteredThemes: any[] = [];

  selectedThemes: any[] = [];

  selectedThemeAdvanced: any[] = [];

  // date-type

  selectedDate: any;

  dates: any[] = [];

  filteredDates: any[] = [];

  selectedDates: any[] = [];

  selectedDateAdvanced: any[] = [];

  // fill-type

  selectedFill: any;

  fills: any[] = [];

  filteredFills: any[] = [];

  selectedFills: any[] = [];

  selectedFillAdvanced: any[] = [];

  constructor(
    // theme-type
    private themeTypeService: ThemeTypeService,
    // date-type
    private dateTypeService: DateTypeService,
    // fill-type
    private fillTypeService: FillTypeService,
  ) { }

  ngOnInit(): void {
    // theme-type
    this.themeTypeService.getThemes().then(themes => {
      this.themes = themes;
    });
    // date-type
    this.dateTypeService.getDates().then(dates => {
      this.dates = dates;
    });
    // fill-type
    this.fillTypeService.getFills().then(fills => {
      this.fills = fills;
    });
  }

  filterTheme(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.themes.length; i++) {
      let theme = this.themes[i];
      if (theme.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(theme);
      }
    }

    if(this.selectedTheme = "")
      this.filteredThemes = [];

    this.filteredThemes = filtered;  
  }

  filterDate(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.dates.length; i++) {
      let date = this.dates[i];
      if (date.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(date);
      }
    }

    if(this.selectedDate = "")
      this.filteredDates = [];

    this.filteredDates = filtered;
    //  console.log(this.filteredDates);
  }

  filterFill(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.fills.length; i++) {
      let fill = this.fills[i];
      if (fill.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(fill);
      }
    }

    if(this.selectedFill = "")
      this.filteredFills = [];

    this.filteredFills = filtered;
    // console.log(this.filteredFills);
  }

  search() {
    this.questionCards = [];
    for (let i = 0; i < this.allQuestionCards.length; i++) {
      let flagThemesNonNull = false, flagEqualThemes = false;
      if (this.filteredThemes.length > 0) {
        flagThemesNonNull = true;
        for (let j = 0; j < this.filteredThemes.length; j++) {
          if (this.allQuestionCards[i].theme == this.filteredThemes[j].name.toLowerCase()) {
            flagEqualThemes = true;
          }
        }
      }

      let flagDatesNonNull = false, flagEqualDates = false;
      if (this.filteredDates.length > 0) {
        flagDatesNonNull = true;
        for (let j = 0; j < this.filteredDates.length; j++) {
          if (this.allQuestionCards[i].date == this.filteredDates[j].name) {
            flagEqualDates = true;
          }
        }
      }

      let flagFillsNonNull = false, flagEqualFills = false;
      if (this.filteredFills.length > 0) {
        flagFillsNonNull = true;
        // console.log(flagFillsNonNull);
        for (let j = 0; j < this.filteredFills.length; j++) {
          // console.log(this.allQuestionCards[i].filling, this.filteredFills[j].name.toLowerCase());
          if (this.allQuestionCards[i].filling == this.filteredFills[j].name.toLowerCase()) {
            flagEqualFills = true;
            //  console.log(flagEqualFills);
          }
        }
      }

      if ((!flagThemesNonNull || flagEqualThemes) &&
        (!flagDatesNonNull || flagEqualDates) && 
        (!flagFillsNonNull || flagEqualFills)) {
         // console.log(flagEqualFills);
        //   console.log(!flagFillsNonNull)
          // console.log(this.allQuestionCards[i]);
         this.questionCards.push(this.allQuestionCards[i]);
      }
    }
  }
}
