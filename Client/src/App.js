import './App.scss';
import Form from './Components/Form/Form';
import PostList from './Components/Posts/PostList';
// import Nav from './Components/Nav/Nav';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

function App() {
  return (

    <Container maxwidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Things to post about
        </Typography>
      </AppBar>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <PostList />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Container>

    </Container>
  );
}

export default App;
