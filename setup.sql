-- Create a new database file
-- Save this as `setup.sql` and run it using SQLite

CREATE TABLE books (
    id INTEGER PRIMARY KEY,
    title TEXT,
    author TEXT,
    available_copies INTEGER
);

-- Insert sample data
INSERT INTO books (title, author, available_copies) VALUES ('Book 1', 'Author 1', 100);
INSERT INTO books (title, author, available_copies) VALUES ('Book 2', 'Author 2', 50);
