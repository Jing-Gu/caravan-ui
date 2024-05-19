import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from '@caravancoop/ui-kit/button';
import { FeatherIconsModule } from './shared/feather-icons/feather-icons.module';
import { AccordionListComponent } from '@caravancoop/ui-kit/accordion-list';
import { AccordionItemComponent } from '@caravancoop/ui-kit/accordion-item';
import { DesktopSidenavComponent } from '@caravancoop/ui-kit/layout/sidenav-desktop';
import { MobileSidenavComponent } from '@caravancoop/ui-kit/layout/sidenav-mobile';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonComponent,
    FeatherIconsModule,
    AccordionListComponent,
    AccordionItemComponent,
    DesktopSidenavComponent,
    MobileSidenavComponent,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
