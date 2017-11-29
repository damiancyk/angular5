import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add this
import { AboutComponent } from './about/about.component';  // Add this
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'about/:id',             // Add /:id here
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

constructor(private route: ActivatedRoute, private router: Router) { }

  sendMeHome() {
      this.router.navigate(['']);
    }
}
