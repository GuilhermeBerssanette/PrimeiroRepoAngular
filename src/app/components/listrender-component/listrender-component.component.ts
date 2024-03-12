import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../../Animal';
@Component({
  selector: 'app-listrender-component',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listrender-component.component.html',
  styleUrl: './listrender-component.component.css'
})
export class ListrenderComponentComponent implements OnInit{

  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 4 },
    { name: 'Tom', type: 'Cat', age: 10 },
    { name: 'Frida', type: 'Dog', age: 11 },
    { name: 'Bob', type: 'Horse', age: 2 },
  ];

  animalDetails = '';

  constructor() {}

  ngOnInit(): void {}

  showAge(animal: Animal): void{
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos de vida!`;
  }
}
