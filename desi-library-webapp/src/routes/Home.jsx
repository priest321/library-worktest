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
	  <Button 
        variant="contained" 
        color="primary" 
        sx={{ mt: 2 }} 
        onClick={handleNavigateToBooks}
      >
        Go to Books
      </Button>
      <Typography>Welcome to the DESI Library</Typography>
    </Box>
  );
}

export default Home;
