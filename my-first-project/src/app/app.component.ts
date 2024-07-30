import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsComponent} from "./../forms/forms.component"
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsComponent,ParentComponent,ChildComponent,HomeComponent,NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = ' bhtnhujthtn';
}
