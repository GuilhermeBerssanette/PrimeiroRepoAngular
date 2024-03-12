import { CommonModule } from '@angular/common';
import { Component,  NgModule,  OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-twowaybiding-component',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  templateUrl: './twowaybiding-component.component.html',
  styleUrl: './twowaybiding-component.component.css'
})
export class TwowaybidingComponentComponent implements OnInit{
  name: string = '';
  constructor() {}

  ngOnInit(): void {}
}
