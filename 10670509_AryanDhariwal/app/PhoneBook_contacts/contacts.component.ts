import { Component, OnInit } from '@angular/core';
import { ContactService } from '../PhoneBook_contact/contact.service';
import { Contact } from '../PhoneBook_contact/contact';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})


export class ContactsComponent implements OnInit {
contact:Contact;
contactDelete:Contact;
contactSearch:Contact[]=[];
contacts:Contact[];
contSort:Contact[];
icon:string;
Firstname:string;
funcalled:boolean;
Edit_Function:boolean;
updateSuccess:boolean;
  constructor(private contactSer:ContactService) 
  {
   this.funcalled=false;
    this.contacts = this.contactSer.getContacts();
    this.contSort=this.contacts.sort();
    this.contactSearch=this.contactSer.getContacts();
    this.contact = new Contact();
    this.contactDelete=new Contact();
    this.Edit_Function=false;
    this.updateSuccess=false;

    this.contacts.sort((a, b) => (a.Firstname < b.Firstname ? -1 : 1));

    this.icon="glyphicon glyphicon-user";

   }

  ngOnInit(): void {
  }

  deleteCont(contact){
    console.log("In delete ")
    this.contactSer.deleteContact(contact);

  }

  editCont(contact)
  {
    console.log("in edit")
    this.Edit_Function=true;
    this.contactDelete = contact;
    console.log(this.Edit_Function);
    console.log(contact.name);
    console.log(this.contactDelete.Firstname);
    console.log("In success")    
    console.log(this.updateSuccess);
  }
Search(){

  if(this.contact.Firstname!="")
  {

    this.contactSearch=this.contactSer.getContacts();
  console.log("above");
    this.funcalled=true;
this.contactSearch=this.contactSearch.filter(res=>{
  return res.Firstname.toLocaleLowerCase().match(this.contact.Firstname.toLocaleLowerCase());
}
);
  }

  else if(this.contact.Firstname=="")
  {
    console.log("in ngon");
    this.funcalled=false;
    this.contact=new Contact();
    this.Firstname="";
    this.contactSearch=[];
    this.ngOnInit();    
  }
}
}
