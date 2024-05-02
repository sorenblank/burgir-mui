import { Button as MuiButton } from '@mui/material';
import { Box } from '@mui/material';

const Button = ({ children, orange, sx, ...props }) => {
  return (
    <MuiButton
      {...props}
      component="button"
      disableRipple={true}
      sx={{
        ...sx,
        borderRadius: '6px',
        px: '35px',
        py: '0px',
        fontFamily: 'Rubik',
        bgcolor: orange ? 'darkOrange' : 'orange',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
        color: 'white',
        fontSize: '14px',
        height: '45px',
        fontWeight: 'normal',
        textTransform: 'none',
        border: 'none',
        cursor: 'pointer',
        '&:hover': {
          bgcolor: orange ? 'darkOrange' : 'orange',
          '& div' : {
            transform: 'translate(-50%, 51%) scale(500)',
          }
        },
      }}
    >
      {children}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-1px',
          left: '20px',
          width: '1px',
          height: '1px',
          borderRadius: '50%',
          bgcolor: '#000000',
          zIndex: -1,
          transition: '0.5s ease',
          transform: 'translate(-50%, 51%) scale(1))',
        }}
      />
    </MuiButton>
  );
};

export default Button;