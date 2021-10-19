import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-write-recipe',
  templateUrl: './write-recipe.component.html',
  styleUrls: ['./write-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WriteRecipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
