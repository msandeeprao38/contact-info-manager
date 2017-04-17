import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { ContactsService } from '../contacts.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editmode = false;
  editedItemIndex: number;
  editedItem: Contact;

  @ViewChild('contactForm') cForm: NgForm;
  @Output() contactAdded = new EventEmitter<any>();

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.subscription = this.contactsService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editmode = true;
          this.editedItem = this.contactsService.getContact(index);
          this.cForm.setValue({
            firstName: this.editedItem.firstName,
            lastName: this.editedItem.lastName,
            email: this.editedItem.email,
            phone: this.editedItem.phone,
            status: this.editedItem.status,
          });
        }
      );
  }

  onSubmit() {
    const value = this.cForm.value;
    const newContact = new Contact(
      value.firstName, value.lastName, value.email, value.phone, value.status
    );
    if (this.editmode) {
      this.contactsService.updateContact(this.editedItemIndex, newContact);
    } else {
      this.contactsService.addToContacts(newContact);
    }
    this.cForm.reset();
    this.editmode = false;
    // this.contactAdded.emit();
  }

  onClear() {
    this.editmode = false;
    this.cForm.reset();
  }

  onDelete() {
    this.onClear();
    this.contactsService.deleteContact(this.editedItemIndex);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
