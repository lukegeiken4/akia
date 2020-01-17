import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { LocationsComponent } from './locations/locations.component';
import { LocationsRoutingModule } from './locations-routing.module';

@NgModule({
  declarations: [LocationsComponent],
  imports: [CommonModule, SharedModule, LocationsRoutingModule]
})
export class LocationsModule {}
