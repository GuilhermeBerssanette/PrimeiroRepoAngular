import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ParentComponentComponent } from "./components/parentdata-component/parent-component.component";
import { DirectivesComponentComponent } from "./components/directives-component/directives-component.component";
import { IFComponentComponent } from "./components/if-component/if-component.component";
import { EventoComponentComponent } from "./components/evento-component/evento-component.component";
import { EmitterComponentComponent } from "./components/emitter-component/emitter-component.component";
import { ChangenumberComponentComponent } from "./components/changenumber-component/changenumber-component.component";
import { ListrenderComponentComponent } from "./components/listrender-component/listrender-component.component";
import { PipesComponentComponent } from "./components/pipes-component/pipes-component.component";
import { TwowaybidingComponentComponent } from "./components/twowaybiding-component/twowaybiding-component.component";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ApplicationModule } from '@angular/core';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FirstComponentComponent, ParentComponentComponent, DirectivesComponentComponent,
       IFComponentComponent, EventoComponentComponent, EmitterComponentComponent, ChangenumberComponentComponent,
        ListrenderComponentComponent, PipesComponentComponent, TwowaybidingComponentComponent, FormsModule, 
      AppRoutingModule, ApplicationModule],
    
})




export class AppComponent {
  userName = 'Joaquim';

  userData = {
    email: 'Joaquim@gmail.com',
    role: 'Admin'
  };

  title = 'curso-angular';
}
