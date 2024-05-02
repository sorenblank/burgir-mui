import { Box } from '@mui/material';

const Toggle = ({ clicked, onClick }) => {
  return (
    <Box
      component="button"
      sx={{
        display: {xs: 'grid', md: 'none'},
        gap: '4px',
        cursor: 'pointer',
        border: 'none',
        background: 'none',
        height: '100%',
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          width: '10px',
          height: '3px',
          bgcolor: 'black',
          borderRadius: '5px',
          transition: '0.25s ease',
          transform: clicked ? 'translate(1px, 3px) rotate(45deg)' : 'none',
        }}
      />
      <Box
        sx={{
          width: '20px',
          height: '3px',
          bgcolor: 'black',
          borderRadius: '5px',
          transition: '0.25s ease',
          transform: clicked ? 'rotate(-45deg)' : 'none',
        }}
      />
      <Box
        sx={{
          width: '10px',
          height: '3px',
          bgcolor: 'black',
          borderRadius: '5px',
          ml: 'auto',
          transition: '0.25s ease',
          transform: clicked ? 'translate(-1px, -3px) rotate(45deg)' : 'none',
        }}
      />
    </Box>
  );
};

export default Toggle;