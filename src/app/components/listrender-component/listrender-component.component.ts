import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listrender-component',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listrender-component.component.html',
  styleUrl: './listrender-component.component.css'
})
export class ListrenderComponentComponent implements OnInit{

animals = [
  { name: 'turca', type: 'dog'},
  { name: 'tom', type: 'cat'},
  { name: 'frida', type: 'dog'},
  { name: 'bob', type: 'horse'},
]

constructor() {}

  ngOnInit(): void {}
}
