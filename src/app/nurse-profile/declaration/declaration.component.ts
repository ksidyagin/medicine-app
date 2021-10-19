import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeclarationComponent implements OnInit {

  declaration = JSON.parse(localStorage.getItem('declaration'));
  constructor() { }

  ngOnInit(): void {
  }

}
