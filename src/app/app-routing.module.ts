import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'sidemenu', pathMatch: 'full'},
    {path: 'sidemenu', loadChildren: './pages/sidemenu/sidemenu.module#SidemenuPageModule'},
    {path: 'search', loadChildren: './pages/search/search.module#SearchPageModule'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
