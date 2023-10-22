import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Container, CssBaseline, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./components/Home";
import AddPost from "./components/AddPost";
import theme from "./components/Theme"; 
import Posts from "./components/Posts";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<AppBar position="static" color="primary">
					<Toolbar>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							🐦 WITTER 
						</Typography>
						<Button color="inherit" component={Link} to="/">
							Home
						</Button>
						<Button color="inherit" component={Link} to="/add">
							Add Post
						</Button>
						<Button color="inherit" component={Link} to="/posts">
							Posts
						</Button>
					</Toolbar>
				</AppBar>
				<Container maxWidth="md" sx={{ marginTop: 4 }}>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/post/:postId" component={Posts} />
						<Route path="/add" component={AddPost} />
						<Route path="/posts" component={Posts} />
					</Switch>
				</Container>
			</Router>
		</ThemeProvider>
	);
}

export default App;
