import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullKewComponent } from './components/full-kew/full-kew.component';
import { AloqaComponent } from './components/aloqa/aloqa.component';
import { MainComponent } from './components/main/main.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'aloqa', component: AloqaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FullKewComponent,
    AloqaComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }