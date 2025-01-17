import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path:'' , redirectTo:'home' , pathMatch:'full' },
    { path:'home' , component:HomeComponent , title:'home' },
    { path:'about' , component:AboutComponent , title:'about' },
    { path:'portfolio' , component:PortfolioComponent , title:'portfolio' },
    { path:'contact' , component:ContactComponent , title:'contact' },
    { path:'**' , component:NotfoundComponent , title:'notFound' }

];
