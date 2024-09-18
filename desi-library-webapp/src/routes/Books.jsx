import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useData } from "../data";
import { useNavigate } from "react-router-dom";
import BookDetails from "./bookdetails"; 

function Books() {
  const booksData = useData("/book/GetAllBooks", "GET");
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(null);
  
  const getBookDetails = (bookId) => {
    setSelectedBook(bookId);
  };

  if (!booksData) {
    return <Typography>Loading...</Typography>;
  }

  if (booksData.length === 0) {
    return <Typography>No books available</Typography>;
  }

  return (
    <Box sx={{ display: 'flex', width: '100%', overflow: 'hidden' }}>
      <Box sx={{ flex: 1, padding: 2, overflowY: 'auto' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {booksData.map((book) => (
                <TableRow key={book.id}>
                  <TableCell>{book.id}</TableCell>
                  <TableCell>{book.name}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>
                    <Button 
                      variant="contained" 
                      onClick={() => getBookDetails(book.id)}
                    >
                      {'Book details'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      
      <Box sx={{ flex: 1, padding: 2 }}>
        {selectedBook ? <BookDetails bookId={selectedBook} /> : <Typography>Select a book to view details</Typography>}
      </Box>
    </Box>
  );
}

export default Books;
