import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  standalone: true,
  imports: [],
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css'
})
export class ParentComponentComponent implements OnInit{
  @Input() name: string = '';
  @Input() userData!: {email: string, role:string};


  constructor() {}

  ngOnInit(): void {}


}
