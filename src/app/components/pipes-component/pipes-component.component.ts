import { DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-component',
  standalone: true,
  imports: [UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './pipes-component.component.html',
  styleUrl: './pipes-component.component.css'
})
export class PipesComponentComponent implements OnInit{
  someText = "TESTANDO O PIPE OPERATOR ";

  today = new Date ();

  constructor() {}

  ngOnInit(): void {}

}
