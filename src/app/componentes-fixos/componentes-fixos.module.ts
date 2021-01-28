import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    MenuLateralComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    MenuLateralComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class ComponentesFixosModule { }
