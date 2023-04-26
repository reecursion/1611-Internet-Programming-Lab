var http = require('http');
//defining a list of available books
const books = [
    {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        year: 1951,
        genre: 'Fiction'
    },
    {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        year: 1954,
        genre: 'Fantasy'
    },
    {
        title: 'The Hitchhiker\'s Guide to the Galaxy',
        author: 'Douglas Adams',
        year: 1979,
        genre: 'Science Fiction'
    },
    {
        title: 'Brave New World',
        author: 'Aldous Huxley',
        year: 1932,
        genre: 'Science Fiction'
    },
    {
        title: '1984',
        author: 'George Orwell',
        year: 1949,
        genre: 'Science Fiction'
    },
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        year: 1813,
        genre: 'Romance'
    }
];

//Generate table of books
const generateTable = () => {
    let code = '<table>';
    code += `<tr><th>Title</th><th>Author</th><th>Year</th><th>Genre</th></tr>`;
    books.forEach(book => {
        code += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.year}</td><td>${book.genre}</td></tr>`;
    });
    code += '</table>';
    return code;
}
//Creating a server 
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><head><title>Books</title></head>');
    res.write('<style>table{border-collapse:collapse;}tr,td,th{padding:10px;border:1px solid black;}</style>');
    res.write('</head><body>');
    res.write('<h3> Books Available </h3>');
    res.write(generateTable());
    res.write('</body></html>');
    res.end();
});

server.listen(8080, () => { console.log('Server is listening on port 8080'); })
  