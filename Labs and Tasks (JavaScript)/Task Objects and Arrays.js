let books = [
    {title: 'Speaking JavaScript',
     author: 'Axel Rauschmayer',
     pages: 460
    },
    
    {title: 'Programmng JavaScript Applications',
     author: 'Eric Elliot',
     pages: 254 
    },
    
    {title: 'Understanding ECMAScript 6',
     author: 'Nicholas C. Zakas',
     pages: 352
    }
    
    ];
    
    books.push({
        title: 'Learning JavaScript Design Patterns',
        author: 'Addy Osmani',
        pages: 254
        });
        
    console.log(books.length);
    console.log(books[0].title);
    console.log(books[1].title);
    console.log(books[2].title);
    console.log(books[3].title);
    
let t1 = books.slice(2);
 console.log(t1);
 

 
let book1 = books.shift();
console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);

 let ptotal = books[0].pages + books[1].pages + books[2].pages;
 console.log(`pages: ${ptotal}`);