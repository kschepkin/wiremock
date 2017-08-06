import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MappingViewComponent} from './mapping-view/mapping-view.component';
import {MatchedViewComponent} from './matched-view/matched-view.component';
import {UnmatchedViewComponent} from './unmatched-view/unmatched-view.component';

const routes: Routes = [
  /*{
    path: '',
    children: []
  }*/
  {path: '', component: MappingViewComponent},
  {path: 'matched', component: MatchedViewComponent},
  {path: 'unmatched', component: UnmatchedViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }