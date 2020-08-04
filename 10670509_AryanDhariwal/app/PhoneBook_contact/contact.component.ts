import { Component, OnInit } from '@angular/core';
import {Contact} from './contact';
import {ContactService} from './contact.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts:Contact[];
  contact:Contact;
  myForm:FormGroup;
  contactAdded:boolean;

  constructor(private contactSer:ContactService)
   {
    this.contactAdded=false;
    this.contact = new Contact();
    this.contacts = this.contactSer.getContacts();
    this.myForm = new FormGroup({
      Firstname:new FormControl(null,Validators.required),
      Lastname:new FormControl(null,Validators.required),
      ContactNumber:new FormControl(null,[Validators.required,Validators.min(9000000)])
    });
    }

    public get Firstname() {
      return this.myForm.get('Firstname');
  }
  public get Lastname() {
      return this.myForm.get('Lastname');
  }
  public get ContactNumber() {
      return this.myForm.get('ContactNumber');
  }
  
    addContact()
    {
      if(this.myForm.valid)
      {
        this.contact.Firstname=this.Firstname.value;
        this.contact.Lastname = this.Lastname.value;
        this.contact.ContactNumber = this.ContactNumber.value;
      
        this.contactSer.addContact(this.contact);
      this.contact = new Contact();
      this.contactAdded=true;
        console.log(this.contactAdded);
        console.log("done")
      }
    }

  ngOnInit(): void {
  }

}
