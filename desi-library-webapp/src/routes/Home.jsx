import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleNavigateToBooks = () => {
    navigate('/books');
  };
  return (
    <Box>
      <Typography>Welcome to the DESI Library</Typography>
	  <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleNavigateToBooks}
      >
        View Books
      </Button>
    </Box>
  );
}

export default Home;
