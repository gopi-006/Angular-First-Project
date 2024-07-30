import { Routes } from '@angular/router';

import { FormsComponent } from '../forms/forms.component';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';

export const routes: Routes = [
    {
        path:'',
     title:'',
     component:HomeComponent,
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
   
    
];
