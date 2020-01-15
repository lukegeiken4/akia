import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./features/characters/characters.module').then(m => m.CharactersModule)
  },
  //   {
  //     path: 'feature-list',
  //     loadChildren: () =>
  //       import('./features/feature-list/feature-list.module').then(
  //         m => m.FeatureListModule
  //       )
  //   },
  //   {
  //     path: 'settings',
  //     loadChildren: () =>
  //       import('./features/settings/settings.module').then(m => m.SettingsModule)
  //   },
  //   {
  //     path: 'examples',
  //     loadChildren: () =>
  //       import('./features/examples/examples.module').then(m => m.ExamplesModule)
  //   },
  {
    path: '**',
    redirectTo: 'about'
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
