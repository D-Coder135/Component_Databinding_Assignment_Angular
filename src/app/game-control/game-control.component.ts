import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  intervalFired = new EventEmitter<number>();
  interval;

  constructor() {
  }

  ngOnInit(): void {
  }

  onStartGame() {

  }
}
