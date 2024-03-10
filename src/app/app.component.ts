import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ParentComponentComponent } from "./components/parentdata-component/parent-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FirstComponentComponent, ParentComponentComponent]
    
})
export class AppComponent {
  userName = 'Joaquim';

  userData = {
    email: 'Joaquim@gmail.com',
    role: 'Admin'
  };

  title = 'curso-angular';
}
