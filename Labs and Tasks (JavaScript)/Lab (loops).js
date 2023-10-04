let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];
while(true){
    
let options = prompt('Select 1 for first contact, Select 2 for last contact, Select 3 to add a new contact, Select 4 to display all contacts, Select 5 to quit the program');
    let last = contacts.length - 1;
    let name3;
    let phone3;
    let email3;
    if(options == 5){
        break;
    }
        switch (options) {
        case '1':
            console.log(contacts[0].name);
            console.log(contacts[0].phone);
            console.log(contacts[0].email);
            break;
        
        case '2': 
          console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);  
        
        break;
        
        case '3': 
        name3 = prompt('What is your name?')
        phone3 = prompt('What is your phone')
        email3 = prompt('What is your email?')
       
        
        contacts.push({
            name: name3,
            phone: phone3,
            email: email3
       });  
      
         break;
         
     case '4':
        for (let allcontacts of contacts){
            console.log(`${allcontacts.name}`);
            console.log(`${allcontacts.phone}`);
            console.log(`${allcontacts.email}`);
        }
            break;
        default: 
        alert("Not an available option");
    }
}