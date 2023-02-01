# Material UI MUI v5 React Social Media App


### Style Customization using 'styled'

```js
const StyledToolbar = styled(Toolbar)({
   display: 'flex',
   justifyContent: 'space-between'
})

const Search = styled("div")(({theme}) => ({
   backgroundColor: "white",
   padding: "0 10px",
   borderRadius: theme.shape.borderRadius,
   width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
   display: 'none',
   alignItems: 'center',
   gap: '20px',
   [theme.breakpoints.up("sm")]: {
      display: "flex"
   }
}));

const UserBox = styled(Box)(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   gap: '10px',
   [theme.breakpoints.up('sm')]: {
      display: 'none',
   },
}));
```