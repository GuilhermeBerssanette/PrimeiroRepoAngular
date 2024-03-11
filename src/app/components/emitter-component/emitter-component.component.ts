import { Component, OnInit } from '@angular/core';
import { ChangenumberComponentComponent } from '../changenumber-component/changenumber-component.component';

@Component({
  selector: 'app-emitter-component',
  standalone: true,
  imports: [ChangenumberComponentComponent],
  templateUrl: './emitter-component.component.html',
  styleUrl: './emitter-component.component.css'
})
export class EmitterComponentComponent implements OnInit {
  myNumber: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 100);
  }

}
