import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-changenumber-component',
  standalone: true,
  imports: [],
  templateUrl: './changenumber-component.component.html',
  styleUrl: './changenumber-component.component.css'
})
export class ChangenumberComponentComponent implements OnInit{

  
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();
  
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.changeNumber.emit();
  }

}
