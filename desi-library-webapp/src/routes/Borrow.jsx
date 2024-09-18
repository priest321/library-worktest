import React from 'react';
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
import { useData, request } from "../data";

function Borrow() {
	const booksData = useData("/book/GetAllBooks", "GET");
	const borrowable = useData("/book/BorrowableBooks", "GET");
	const unborrowable = useData("/book/UnBorrowableBooks", "GET");
	console.log("unborrowable", unborrowable)

	const handleBorrowBook = (bookId, borrowed) => {
		console.log("id", bookId)
		const response = request(`/book/UpdateBookBorrowStatus/${bookId}`, 'PUT')
		console.log(response)
    };
	function available(id){
		const book = borrowable.find(b => b.id == id)
		return book;
	}
	if (!booksData) {
	return <Typography>Loading...</Typography>;
	}

	if (booksData.length === 0) {
	return <Typography>No books available</Typography>;
	}

	return (
		<Box sx={{ width: '100%', overflowX: 'auto' }}>
		  <Typography variant="h6" gutterBottom>Current Books</Typography>
		  <TableContainer component={Paper}>
			<Table>
			  <TableHead>
				<TableRow>
				  <TableCell>ID</TableCell>
				  <TableCell>Name</TableCell>
				  <TableCell>Author</TableCell>
				  <TableCell>Available</TableCell>
				  <TableCell>Actions</TableCell>
				</TableRow>
			  </TableHead>
			  <TableBody>
				{booksData.map((book) => (
				  <TableRow key={book.id}>
					<TableCell>{book.id}</TableCell>
					<TableCell>{book.name}</TableCell>
					<TableCell>{book.author}</TableCell>
					<TableCell>{available(book.id)? "YES" : "NO"}</TableCell>
					<TableCell>
					  <Button
						variant="contained"
						onClick={()=>handleBorrowBook(book.id, book.borrowed)}
					  >
						{book.Borrowed ? 'Return Book' : 'Borrow Book'}
					  </Button>
					</TableCell>
				  </TableRow>
				))}
			  </TableBody>
			</Table>
		  </TableContainer>
		</Box>
		);
	}

export default Borrow;
