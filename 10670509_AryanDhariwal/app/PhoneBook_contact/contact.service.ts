import {Contact} from "./contact";

export class ContactService{

private contacts:Contact[];

constructor()
{
this.contacts=[];

var contact_1,contact_2;

contact_1 = new Contact("Steve","Jobs","220-454-6754");
contact_2 = new Contact("Fred","Allen","210-657-9886");

this.contacts.push(contact_1);
this.contacts.push(contact_2);
}

getContacts():Contact[]{
    return this.contacts;
}

addContact(c:Contact){
    this.contacts.push(c);
}

editContact(c:Contact)
{
    for (let index = 0; index < this.contacts.length; index++)
    {
        if(this.contacts[index].Firstname==c.Firstname)
        {
            this.contacts[index]=c;
        }
    }
}
deleteContact(m:Contact)
    {
        console.log(m);
        var present:Boolean = false; 
        var notpresent:Boolean=false;
        
        for (let index = 0; index < this.contacts.length; index++)
         {
            if(this.contacts[index].Firstname ==m.Firstname)
                {  
                    console.log(this.contacts[index]);
                     present==true;
                    this.contacts.splice(index,1);  
                 }    
         }
         if(present==false)
         {
            notpresent=true;
        }
    }
}




