import { RouterModule, Routes } from "@angular/router";
import { ArtFormComponent } from "./art-form/art-form.component";



const routes: Routes = [
    {
        path: '/create',
        component: ArtFormComponent
    },
   
];


export const ArtRootingModule = RouterModule.forChild(routes)