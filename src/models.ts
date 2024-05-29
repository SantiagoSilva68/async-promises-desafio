import * as jsonfile from "jsonfile";

class Contact {
  id?: number = undefined;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];
load() {
    const myPromise = new Promise((resolve, reject) => {
        jsonfile.readFile(__dirname + "/contacts.json", (err, data) => {
            if (err) {
                reject(err);
            } else {
                this.data = data;
                resolve(this.data);
            }
        });
    });
    return myPromise;
}

  getAll() {
    return this.data; 
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    const myPromise = new Promise((resolve, reject) => {
        jsonfile.writeFile(__dirname + "/contacts.json", this.data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(this.data);
            }
        });
    });
    return myPromise;
}

  getOneById(id) {
    const encontrado = this.data.find((contacto) => {
      if (contacto?.id == id) {
        return true;
      }
    });

    return encontrado;
  }
}
export { ContactsCollection, Contact };
