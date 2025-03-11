
import {Repository} from "./repositories/repository";
import {Contact} from "./types";

const contactRepository: Repository<Contact> = new Repository<Contact>();

contactRepository.create(1, {
    name: "John",
    secondName: "Doe",
    phoneNumber: "+1 555 123-4567",
    email: "john.doe@example.com"
});

contactRepository.create(2, { name: "Emily", phoneNumber: "+1 555 987-6543" });
contactRepository.create(3, {
    name: "Michael",
    secondName: "Smith",
    phoneNumber: "+1 555 654-3210",
    email: "michael.smith@example.com"
});
contactRepository.create(4, { name: "Sophia", secondName: "Brown", phoneNumber: "+1 555 321-4578"});

console.log('start values', contactRepository.read());
contactRepository.update(3, { name: "Nicolas"});

contactRepository.delete(2);
console.log('read deleted contact', contactRepository.read(2));

console.log('read 1st and 4th', contactRepository.read([1, 4]));

console.log('read all', contactRepository.read());
