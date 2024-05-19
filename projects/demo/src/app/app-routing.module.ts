import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
},
{
    path: 'components/avatar',
    loadComponent: () => import('./components/avatars/avatars.component').then(m => m.AvatarsComponent)
},
{
    path: 'components/alert',
    loadComponent: () => import('./components/alerts/alerts.component').then(m => m.AlertsComponent)
},
{
    path: 'components/accordion',
    loadComponent: () => import('./components/accordions/accordions.component').then(m => m.AccordionsComponent)
},
{
  path: 'components/button',
  loadComponent: () => import('./components/buttons/buttons.component').then(m => m.ButtonsComponent)
},
{
  path: 'components/badge',
  loadComponent: () => import('./components/badges/badges.component').then(m => m.BadgesComponent)
},
{
  path: 'components/divider',
  loadComponent: () => import('./components/dividers/dividers.component').then(m => m.DividersComponent)
},
{
  path: 'components/spinner',
  loadComponent: () => import('./components/spinners/spinners.component').then(m => m.SpinnersComponent)
},
{
  path: 'components/toggle',
  loadComponent: () => import('./components/toggles/toggles.component').then(m => m.TogglesComponent)
},
{
  path: 'components/linear-progress',
  loadComponent: () => import('./components/linear-progress/linear-progress.component').then(m => m.LinearProgressComponent)
},
{
  path: 'components/gauge',
  loadComponent: () => import('./components/gauges/gauges.component').then(m => m.GaugesComponent)
},
{
  path: 'components/rating',
  loadComponent: () => import('./components/ratings/ratings.component').then(m => m.RatingsComponent)
},
{
  path: 'components/slider',
  loadComponent: () => import('./components/sliders/sliders.component').then(m => m.SlidersComponent)
},
{
  path: 'components/tooltip',
  loadComponent: () => import('./components/tooltips/tooltips.component').then(m => m.TooltipsComponent)
},
{
  path: 'templates/faq',
  loadComponent: () => import('./templates/faq/faq.component').then(m => m.FaqComponent)
},
{
  path: 'templates/dialog',
  loadComponent: () => import('./templates/dialogs/dialogs.component').then(m => m.DialogsComponent)
},
{
  path: 'templates/signup-form',
  loadComponent: () => import('./templates/signup-form/signup-form.component').then(m => m.SignupFormComponent)
},
{
  path: 'templates/cards',
  loadComponent: () => import('./templates/cards/cards.component').then(m => m.CardsComponent)
},
{
  path: 'templates/lists',
  loadComponent: () => import('./templates/lists/lists.component').then(m => m.ListsComponent)
},
/* {
    path: '**',
    component: 404Component
} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
