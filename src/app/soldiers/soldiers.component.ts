import { Component, OnInit } from '@angular/core';
import { Soldier} from '../soldier';

@Component({
  selector: 'app-soldiers',
  templateUrl: './soldiers.component.html',
  styleUrls: ['./soldiers.component.css']
})


export class SoldiersComponent implements OnInit {

soldier: Soldier = {
  id : 1,
  name : 'Windstorm'
};

  constructor() { }

  ngOnInit() {
  }

}
