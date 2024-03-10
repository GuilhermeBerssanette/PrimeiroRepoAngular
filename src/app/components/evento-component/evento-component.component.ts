import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-component',
  standalone: true,
  imports: [NgIf],
  templateUrl: './evento-component.component.html',
  styleUrl: './evento-component.component.css'
})
export class EventoComponentComponent implements OnInit{

  show: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showMessage(): void {
    this.show = !this.show; //toogle
  }

}
