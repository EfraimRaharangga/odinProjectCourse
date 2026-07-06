const myLibrary = [
];

class Book {
    constructor(author, title, pages, isRead) {
        this._author = author
        this._title = title
        this._pages = pages
        this._isRead = isRead
        this._id = crypto.randomUUID()
    }

    // getter
    get id() { return this._id }

    get title() { return this._title }

    get pages() { return this._pages }

    get isRead() { return this._isRead }

    get author() { return this._author }

    // setter
    set author(name) { this._author = name }

    set pages(pages) {
        if (typeof pages !== 'number') {
            throw new Error('pake nomor cuy')
        } else {
            this._pages = pages
        }
    }

    set title(name) {
        this._title = name
    }

    set isRead(state) {
        if (typeof state !== 'boolean') {
            throw new Error('true false cuyy')
        } else {
            this._isRead = state
        }
    }

}

function addBookToLibrary(author, title, pages, isRead) {
    const book = new Book(author, title, pages, isRead);
    myLibrary.push(book);
    return `the book ${title} has been added to the library`;
}

let bookToDeleteId = null;

function confirmDeleteBook(id) {
    bookToDeleteId = id;
    const deleteModal = document.getElementById('delete-modal');
    deleteModal.showModal();
}

function deleteBook(id) {
    const index = myLibrary.findIndex((book) => book.id === id);
    if (index !== -1) {
        myLibrary.splice(index, 1);
        displayBooks();
    }
}

function toggleRead(id) {
    const book = myLibrary.find((book) => book.id === id);
    book && (book.isRead = !book.isRead, displayBooks())
}

function displayBooks() {
    const container = document.getElementById('library-container');
    container.innerHTML = ''; // Clear previous content

    myLibrary.forEach((book) => {
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.dataset.id = book.id;

        // Create Badge
        const badgeClass = book.isRead ? 'read' : 'unread';
        const badgeText = book.isRead ? 'Completed' : 'Not Read';

        card.innerHTML = `
            <div class="book-info">
                <h2 class="book-title">${book.title}</h2>
                <p class="book-author">by ${book.author}</p>
                <div class="book-pages">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    ${book.pages} pages
                </div>
            </div>
            <div class="badge ${badgeClass}">${badgeText}</div>
            <div class="card-actions">
                <button class="toggle-read-btn" onclick="toggleRead('${book.id}')">Toggle Read</button>
                <button class="delete-btn" onclick="confirmDeleteBook('${book.id}')">Delete</button>
            </div>
        `;

        container.appendChild(card);
    });
}

// Event Listeners and Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    displayBooks();

    const modal = document.getElementById('book-modal');
    const openModalBtn = document.getElementById('open-modal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const form = document.getElementById('add-book-form');

    // Open modal
    openModalBtn.addEventListener('click', () => {
        modal.showModal();
    });


    // Close modal
    closeModalBtn.addEventListener('click', () => {
        modal.close();
        form.reset(); // Clear form when closing without submitting
    });


    const deleteModal = document.getElementById('delete-modal');
    const closeDeleteModalBtn = document.getElementById('close-delete-modal-btn');
    const cancelDeleteBtn = document.getElementById('cancel-delete-btn');
    const confirmDeleteBtn = document.getElementById('confirm-delete-btn');

    const closeDeleteModal = () => {
        deleteModal.close();
        bookToDeleteId = null;
    };

    closeDeleteModalBtn.addEventListener('click', closeDeleteModal);
    cancelDeleteBtn.addEventListener('click', closeDeleteModal);

    confirmDeleteBtn.addEventListener('click', () => {
        if (bookToDeleteId) {
            deleteBook(bookToDeleteId);
            closeDeleteModal();
        }
    });

    deleteModal.addEventListener('click', (e) => {
        if (e.target === deleteModal) {
            closeDeleteModal();
        }
    });

    // Close modal when clicking outside of it
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.close();
            form.reset();
        }
    });

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        // Get values from the form
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = Number(document.getElementById('pages').value);
        const isRead = document.getElementById('isRead').checked;

        // Add to library
        addBookToLibrary(author, title, pages, isRead);

        // Re-render the grid
        displayBooks();

        // Reset and close
        form.reset();
        modal.close();
    });
});