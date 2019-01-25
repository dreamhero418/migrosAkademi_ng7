import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxSoapModule} from 'ngx-soap';
import {ContactComponent} from './contact/contact.component';
import {ResourcesComponent} from './resources/resources.component';
import {AwardsComponent} from './awards/awards.component';
import {ProgramsComponent} from './programs/programs.component';
import {CookieService} from 'ngx-cookie-service';
import {AboutComponent} from './about/about.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactComponent,
    ResourcesComponent,
    AwardsComponent,
    ProgramsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSoapModule,
    NgbModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
