import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/hasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFontElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, "start");

})

const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({anme: "ghost", age: "999"});

console.log(docOne.age);

enum ResourceType { BOOK, AUTHOR, FILM, ACTOR, PERSON }

// tuples