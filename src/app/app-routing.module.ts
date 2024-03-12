import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListrenderComponentComponent } from "./components/listrender-component/listrender-component.component";

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListrenderComponentComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}