// app.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Connect to SQLite database
const db = new sqlite3.Database('./library.db');

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to get the number of available copies
app.get('/books/:id', (req, res) => {
    const bookId = req.params.id;
    db.get('SELECT available_copies FROM books WHERE id = ?', [bookId], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ available_copies: row.available_copies });
    });
});

// Endpoint to check out a book
app.post('/books/:id/checkout', (req, res) => {
    const bookId = req.params.id;
    db.run('UPDATE books SET available_copies = available_copies - 1 WHERE id = ? AND available_copies > 0', [bookId], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (this.changes === 0) {
            res.status(400).json({ error: 'No copies available' });
            return;
        }
        res.json({ success: true });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
