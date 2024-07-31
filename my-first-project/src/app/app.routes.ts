import { Routes } from '@angular/router';

import { FormsComponent } from '../forms/forms.component';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { HouseComponent } from './house/house.component';

export const routes: Routes = [
    {
        path:'child',
     title:'',
     component:ChildComponent,
    },
    {
        path:'home',
     title:'',
     component:HomeComponent,
    },
    {
        path:'forms',
     title:'',
     component:FormsComponent,
    },
    {
        path:'parent',
     title:'',
     component:ParentComponent,
    },
   
    {
        path:'house',
        title:'',
        component:HouseComponent
    }
];
