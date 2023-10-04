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
    
    let options = prompt('Select 1 for first contact, select 2 for last contact or select 3 to add a new contact');
    let last = contacts.length - 1;
    let name3;
    let phone3;
    let email3;
    
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
      if(name3 && phone3 && email3){
        console.log(`${contacts[3].name} / ${contacts[3].phone} / ${contacts[3].email}`);  
      }
        else{
            alert('Some parts are missing')
        }
        
         break;
    
        default: 
        alert("Not an available option");
    }
    