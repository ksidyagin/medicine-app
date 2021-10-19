import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewRecipeComponent implements OnInit {
  recipe = {
    number: '01-01-0101',
    service:'Получение рецепта',
    polyclinic:'Городская поликлиника №4',
    doctor: 'Иванов Иван Сергеевич',
    date: '19.08.2021',
    status: 'Рецепт актуален 2 месяца'
  };
  id: number;
  constructor(private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {

  }

}
