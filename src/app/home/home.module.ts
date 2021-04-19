import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {ExerciceIDPage} from '../exerciceID/exerciceID.page'
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
    RouterModule.forChild([{ path: 'exerciceID', component: ExerciceIDPage }])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
