
fetch('/data/books.json')
  .then(response => response.json())
  .then(books => {
    const container = document.getElementById('bookshelf-container');
    

    books.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.className = 'book';
      bookElement.innerHTML = `
        <img src="${book.cover}" alt="${book.title} cover" style="max-width: 150px;">
        <h3>${book.title}</h3>
        <p>by ${book.author}</p>
      `;
      container.appendChild(bookElement);
    });
  })
  .catch(error => console.error('Error loading bookshelf:', error));

const style = document.createElement('style');
style.textContent = `
  #bookshelf-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  .book {
    text-align: center;
  }
`;
document.head.appendChild(style);
