import { Component, OnInit } from '@angular/core';

import { Contact } from './contact.model';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];
  inNewContact = false;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
    this.contactsService.contactsChanged
      .subscribe(
        (changedContacts: Contact[]) => {
          this.contacts = changedContacts;
        }
      );
  }
  toNewContact() {
    console.log('clicked');
    console.log(this.inNewContact);
    this.inNewContact = !this.inNewContact;
  }
  hideForm() {
    this.inNewContact = !this.inNewContact;
  }
  onEditcontact(index: number) {
    this.contactsService.startedEditing.next(index);
  }

}
