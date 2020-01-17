import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpisodesComponent } from './episodes/episodes.component';

const routes: Routes = [
  {
    path: '',
    component: EpisodesComponent,
    data: { title: 'Episodes - Akia in the Clouds' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule {}
