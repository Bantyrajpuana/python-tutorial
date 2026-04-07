let books = [];

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  if (title === "" || author === "") {
    alert("Please fill all fields");
    return;
  }

  books.push({ title, author });
  displayBooks();

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
}

function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  books.forEach((book, index) => {
    const row = `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><button class="delete" onclick="deleteBook(${index})">Delete</button></td>
      </tr>
    `;
    bookList.innerHTML += row;
  });
}

function deleteBook(index) {
  books.splice(index, 1);
  displayBooks();
}