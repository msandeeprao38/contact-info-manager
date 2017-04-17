import { Subject } from 'rxjs/Subject';

import { Contact } from './contact.model';

export class ContactsService {
    contactsChanged = new Subject<Contact[]>();
    startedEditing = new Subject<number>();
      private contacts: Contact[] = [
      new Contact('Sandeep', 'Rao', 'sandeep_4490@yahoo.com', 5625527290, 'Online'),
      new Contact('Sandeep', 'Rao', 'sandeep_4490@yahoo.com', 5625527290, 'Offline')
  ];

  getContacts() {
      return this.contacts.slice();
  }
  getContact(index: number) {
    return this.contacts[index];
  }

  addToContacts(contact: Contact) {
    this.contacts.push(contact);
    this.contactsChanged.next(this.contacts.slice());
  }
  updateContact(index: number, contact: Contact) {
    this.contacts[index] = contact;
    this.contactsChanged.next(this.contacts.slice());
  }
  deleteContact(index: number) {
    this.contacts.splice(index, 1);
    this.contactsChanged.next(this.contacts.slice());
  }

}
