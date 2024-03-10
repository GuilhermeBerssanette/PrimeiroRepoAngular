import { NgTemplateOutlet } from '@angular/common';
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-component',
  standalone: true,
  imports: [NgIf],
  templateUrl: './if-component.component.html',
  styleUrl: './if-component.component.css'
})
export class IFComponentComponent implements OnInit {
  canShow: boolean = true
  name = "João";

  constructor() {}

  ngOnInit(): void {}


}
