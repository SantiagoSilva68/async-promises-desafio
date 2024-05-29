import { ContactsCollection, Contact } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: Contact;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection();
  }
  async initialize() {
    await this.contacts.load();
  }
  async processOptions(options: ContactsControllerOptions) {
    let resultado;
  
    if (options.action === "get" && options.params.id) {
      resultado = await this.contacts.getOneById(options.params.id);
    } else if (options.action === "get") {
      resultado = await this.contacts.getAll();
    } else if (options.action === "save" && options.params) {
      this.contacts.addOne(options.params);
      await this.contacts.save();                     
    } 
  
    return resultado;
  }
  
}
export { ContactsController };


// import { ContactsCollection, Contact } from "./models";

// export class ContactsControllerOptions {
//   action: "get" | "save";
//   params: Contact;
// }

// class ContactsController {
//   contacts: ContactsCollection;
//   constructor() {
//     this.contacts = new ContactsCollection();
//     this.contacts.load();
//   }
//   processOptions(options: ContactsControllerOptions) {
//     var resultado;
//     if (options.action == "get" && options.params.id) {
//       resultado = this.contacts.getOneById(options.params.id);
//     } else if (options.action == "get") {
//       resultado = this.contacts.getAll();
//     } else if (options.action == "save" && options.params) {
//       this.contacts.addOne(options.params);
//       this.contacts.save();
//     }
//     return resultado;
//   }
// }
// export { ContactsController };