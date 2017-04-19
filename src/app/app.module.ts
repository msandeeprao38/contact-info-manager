import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';
import { DeleteContactComponent } from './contacts/delete-contact/delete-contact.component';
import { ContactsService } from './contacts/contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    EditContactComponent,
    DeleteContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TextMaskModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
