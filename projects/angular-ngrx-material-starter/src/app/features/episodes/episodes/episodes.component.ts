import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

@Component({
  selector: 'anms-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpisodesComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  releaseButler = require('../../../../assets/release-butler.png');

  constructor() {}

  ngOnInit() {}
}
