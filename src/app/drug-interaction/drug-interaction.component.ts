import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-drug-interaction',
  templateUrl: './drug-interaction.component.html',
  styleUrls: ['./drug-interaction.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrugInteractionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
