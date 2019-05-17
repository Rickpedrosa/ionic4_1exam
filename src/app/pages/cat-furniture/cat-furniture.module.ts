import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CatFurniturePage } from './cat-furniture.page';

const routes: Routes = [
  {
    path: '',
    component: CatFurniturePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CatFurniturePage]
})
export class CatFurniturePageModule {}
