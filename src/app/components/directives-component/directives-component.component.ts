import { NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-component',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './directives-component.component.html',
  styleUrl: './directives-component.component.css'
})
export class DirectivesComponentComponent implements OnInit{
  size = 40;
  font = 'Arial';
  color = 'red';

  classes = ['green-title', 'small-title'];

  underline = 'underline-title';

  constructor() {}

  ngOnInit(): void {}
  
}
