import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationsComponent } from './locations/locations.component';

const routes: Routes = [
  {
    path: '',
    component: LocationsComponent,
    data: { title: 'Locations - Akia in the Clouds' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule {}
