import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { CharactersComponent } from './characters/characters.component';
import { CharactersRoutingModule } from './characters-routing.module';

@NgModule({
  declarations: [CharactersComponent],
  imports: [CommonModule, SharedModule, CharactersRoutingModule]
})
export class CharactersModule {}
