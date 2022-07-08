import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';

const value1 = 0.15;
const value2 = 0.25;
const value3 = 4;

export const Search = styled('div')(
  ({ theme: { shape, palette, breakpoints, spacing } }) => ({
    position: 'relative',
    borderRadius: shape.borderRadius,
    backgroundColor: alpha(palette.common.white, value1),
    '&:hover': {
      backgroundColor: alpha(palette.common.white, value2),
    },
    marginLeft: 0,
    width: '100%',
    [breakpoints.up('sm')]: {
      marginLeft: spacing(1),
      width: 'auto',
    },
  }),
);

export const SearchIconWrapper = styled('div')(({ theme: { spacing } }) => ({
  padding: spacing(0, '2'),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(
  ({ theme: { spacing, transitions, breakpoints } }) => ({
    color: 'white',
    '& .MuiInputBase-input': {
      padding: spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${spacing(value3)})`,
      transition: transitions.create('width'),
      width: '100%',
      [breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);
