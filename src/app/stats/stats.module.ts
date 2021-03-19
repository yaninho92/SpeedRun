import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StatsPageRoutingModule } from './stats-routing.module';
import { StatsPage } from './stats.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatsPageRoutingModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: StatsPage }])
  ],
  declarations: [StatsPage]
})
export class StatsPageModule {}
