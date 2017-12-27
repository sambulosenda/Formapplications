
import { Component, OnInit } from '@angular/core';
import { Soldier} from '../soldier';
import { SOLDIERS } from '../mock-soldiers';

@Component({
  selector: 'app-soldiers',
  templateUrl: './soldiers.component.html',
  styleUrls: ['./soldiers.component.css']
})


export class SoldiersComponent implements OnInit {

  soldier = SOLDIERS;



  constructor() { }

  ngOnInit() {
  }

}
