import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { GalaxyComponent } from './galaxy/galaxy.component';
import { GalaxyRoutingModule } from './galaxy-routing.module';

@NgModule({
  declarations: [GalaxyComponent],
  imports: [CommonModule, SharedModule, GalaxyRoutingModule]
})
export class GalaxyModule {}
