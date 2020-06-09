//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AppComponent } from './app.component';

//Me
import { MaterialModule } from './material.module'
import { UsersModule } from './components/users/users.module';

import { InicioComponent } from './components/inicio/inicio.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { UsersComponent } from './components/users/users.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { EditComponent } from './components/users/edit/edit.component';
import { ModelEditUserComponent } from './shared/components/model-edit-user/model-edit-user.component';
import { ModelHotelComponent } from './shared/components/model-hotel/model-hotel.component';
import { HotelAddComponent } from './components/hotel/hotel-add/hotel-add.component';

//interceptor
import { authInterceptorProviders } from './auth/service/token-interceptor.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG:PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HotelComponent,
    UsersComponent,
    ModalComponent,
    ToolbarComponent,
    EditComponent,
    ModelEditUserComponent,
    ModelHotelComponent,
    HotelAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    UsersModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule,
  ],
  providers: [
    authInterceptorProviders,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
