let books = [];

  function addBook() {
            const bookName = document.getElementById('NombreLibro').value;
            const authorName = document.getElementById('Autor').value;
            const bookDescription = document.getElementById('DescripcionLibro').value;
            const pagesNumber = parseInt(document.getElementById('NumeroPaginas').value);
            if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
                const book = {
                    name: bookName,
                    authorName: authorName,
                    bookDescription: bookDescription,
                    pagesNumber: pagesNumber
                };
                books.push(book);
                showbooks();
                clearInputs();
            } else {
                alert('porfas pon toda la info');
            }
        }

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>Libro : ${index + 1}</h1>
        <p><strong>Nombre: </strong>${book.name}</p>
        <p><strong>Nombre del autor:</strong> ${book.authorName}</p>
        <p><strong>Descripcion del libro:</strong> ${book.bookDescription}</p>
        <p><strong>No. de paginas:</strong> ${book.pagesNumber} paginas</p>
        <button onclick="editbook(${index})">Editar</button>`
    );
    document.getElementById('libro').innerHTML = booksDiv.join('');
}        

function editbook(index) {
    const book = books[index];
    document.getElementById('NombreLibro').value = book.name;
    document.getElementById('Autor').value = book.authorName;
    document.getElementById('DescripcionLibro').value = book.bookDescription;
    document.getElementById('NumeroPaginas').value = book.pagesNumber;
    books.splice(index, 1); // Remueve el libro para que se actualice al guardar
    showbooks(); // Refresca la lista de libros después de eliminar el libro editado
}

 function clearInputs() {
            document.getElementById('NombreLibro').value = '';
            document.getElementById('Autor').value = '';
            document.getElementById('DescripcionLibro').value = '';
            document.getElementById('NumeroPaginas').value = '';
 }  