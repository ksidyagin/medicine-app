import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-base',
  templateUrl: './common-base.component.html',
  styleUrls: ['./common-base.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonBaseComponent implements OnInit {

  ankets: any[] = [];
  recipes: any[] =[];
  spa_cards: any[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.ankets = [
      {
        code: '01-000001',
        fio: 'Иванов Иван Сергеевич',
        code_user: '01-01-0101',
        date_submission: '12:56 19.08.2021',
        status: 'waiting',
        declaration_type: 'Общий тест',
        handler: 'Иванова Марина Ивановна'
      },
      {
        code: '01-000002',
        fio: 'Иванов Иван Сергеевич',
        code_user: '01-01-0101',
        date_submission: '12:56 19.08.2021',
        status: 'finished',
        declaration_type: 'Общий тест',
        handler: 'Иванова Марина Ивановна'
      },
      {
        code: '01-000003',
        fio: 'Иванов Иван Сергеевич',
        code_user: '01-01-0101',
        date_submission: '12:56 19.08.2021',
        status: 'pending',
        declaration_type: 'Общий тест',
        handler: 'Иванова Марина Ивановна'
      },
      {
        code: '01-000004',
        fio: 'Иванов Иван Сергеевич',
        code_user: '01-01-0101',
        date_submission: '12:56 19.08.2021',
        status: 'pending',
        declaration_type: 'Общий тест',
        handler: 'Иванова Марина Ивановна'
      }
    ]

    this.recipes = [
      {
        code: '01-000001',
        fio: 'Иванов Иван Сергеевич',
        code_user: '01-01-0101',
        date_submission: '12:56 19.08.2021',
        status: 'pending',
        declaration_type: 'Коделак, Солпадеин...',
        handler: 'Иванова Марина Ивановна'
      },
      {
        code: '01-000002',
        fio: 'Иванов Иван Сергеевич',
        code_user: '01-01-0101',
        date_submission: '12:56 19.08.2021',
        status: 'waiting',
        declaration_type: 'Коделак',
        handler: 'Иванова Марина Ивановна'
      },
      {
        code: '01-000003',
        fio: 'Иванов Иван Сергеевич',
        code_user: '01-01-0101',
        date_submission: '12:56 19.08.2021',
        status: 'pending',
        declaration_type: 'Коделак, Солпадеин...',
        handler: 'Иванова Марина Ивановна'
      },
      {
        code: '01-000004',
        fio: 'Иванов Иван Сергеевич',
        code_user: '01-01-0101',
        date_submission: '12:56 19.08.2021',
        status: 'pending',
        declaration_type: 'Коделак',
        handler: 'Иванова Марина Ивановна'
      }
    ]

    this.spa_cards = [
      {
        code: '01-000001',
        fio: 'Иванов Иван Сергеевич',
        code_user: '01-01-0101',
        date_submission: '12:56 19.08.2021',
        status: 'pending',
        declaration_type: 'Документы',
        handler: 'Иванова Марина Ивановна'
      },
      {
        code: '01-000002',
        fio: 'Иванов Иван Сергеевич',
        code_user: '01-01-0101',
        date_submission: '12:56 19.08.2021',
        status: 'waiting',
        declaration_type: 'Документы',
        handler: 'Иванова Марина Ивановна'
      },
      {
        code: '01-000003',
        fio: 'Иванов Иван Сергеевич',
        code_user: '01-01-0101',
        date_submission: '12:56 19.08.2021',
        status: 'pending',
        declaration_type: 'Документы',
        handler: 'Иванова Марина Ивановна'
      }
    ]
  }


  goToDeclaration(obj: any){
    localStorage.setItem('declaration', JSON.stringify(obj));
    this.router.navigate(['', 'nurse-declaration']);
  }

}
