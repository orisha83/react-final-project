import {useState, useEffect, useContext} from 'react'
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link, Switch,Route} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Utils from './Utils'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import { MoviesContext } from "./MoviesContaxtApi";
import {MembersContext} from './MembersContextApi'
import {UsersContext} from './UsersContaxtApi'
import {LogInContext} from './LogInContaxtApi'
import { SubscriptionsContext } from './SubscriptionsContaxtApi'
import SubscriptionsComp from './SubscriptionsComp'
import MoviesComp from './MoviesComp'
import EditMovieComp from './EditMovieComp'
import EditMemberComp from './EditMemberComp'
import EditUserComp from './EditUserComp'
import UserManagmentComp from './UsersManagmentComp'
import CreateAccountComp from './CreatAccountComp'
import LoginComp from './LoginComp'
import EntryComp from './EntryComp'
import './Main.css'

const useStyles = makeStyles((theme) => ({
    appbar: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    link: {
        textDecoration: 'none',
      },
    button: {
        color : 'white'
      },
      paper: {
        padding: theme.spacing(3),
        borderColor : 'black',
        borderStyle: 'solid',
        borderWidth: '2px',
      },
  }));

function MainComp()
{
    const classes = useStyles();
    const [isAdmin,setIsAdmin] = useState(true)
    const [isLogedIn,setIsLogedIn] = useContext(LogInContext)
    const [movies, setMovies] = useContext(MoviesContext)
    const [members, setMembers] = useContext(MembersContext);
    const [users, setUsers] = useContext(UsersContext);
    const [subscriptions, setSubscriptions] = useContext(SubscriptionsContext);

    const clickedLogOut = () =>
    {
        confirmAlert({
            title: 'Are you sure you want to Log Out?',                        // Title dialog
            buttons: [
                {
                  label: 'Yes',
                  //onClick: () => deleteMovie()
                },
                {
                  label: 'No'
                }
              ]
          })
    }

    const getUsers = async () =>
    {
        let res = await Utils.getDataFromServer("Users")
        setUsers(res)
    }

    const getMovies = async () =>
    {
        let res = await Utils.getDataFromServer("Movies")
        setMovies(res)
    }

    const getMembers = async () =>
    {
        let res = await Utils.getDataFromServer("Members")
        setMembers(res)
    }

    const getSubscriptions = async () =>
    {
        let res = await Utils.getDataFromServer("Subscriptions")
        setSubscriptions(res)
    }

    useEffect( async () => {
        console.log("useEffect in main")
        getMovies()
        getMembers()
        getUsers()
        getSubscriptions()
        console.log(isLogedIn)
    },[])
   
       return(
        <div >
           <AppBar position="sticky" className={classes.appbar}>
          <Toolbar >
              <Grid container direction="row" justify="center" spacing={5}>
                    <Grid item>
                       {isLogedIn 
                        ? <Link to="/Movies" className={classes.link}><Button className={classes.button} >Movies</Button></Link>
                        : <Link to="/LogIn" className={classes.link}><Button className={classes.button} >Log In</Button></Link> 
                       }
                    </Grid>
                    <Grid item>
                        {isLogedIn 
                            ? <Link to="/Subscriptions" className={classes.link}><Button className={classes.button}>Subscriptions</Button></Link>
                            : <Link to="/NewAccount" className={classes.link}><Button className={classes.button}>Sign In</Button></Link>
                        }
                    </Grid>
                    <Grid item>
                        {isAdmin && isLogedIn && <Link to="/UsersManagment" className={classes.link}><Button className={classes.button}>User Managment</Button></Link>}
                    </Grid>
                    <Grid item>
                        {isLogedIn ? <Button className={classes.button} startIcon={<ExitToAppIcon />} onClick={clickedLogOut}>Log Out</Button> : ""}
                    </Grid>
                </Grid>
          </Toolbar>
        </AppBar>
        <Switch>
            <Route exact path="/" component={EntryComp}/>    
            <Route path="/LogIn" component={LoginComp}/>   
            <Route path="/NewAccount" component={CreateAccountComp}/>
            <Route path="/Movies/Edit/:id" component={EditMovieComp}/>
            <Route path="/Movies" component={MoviesComp}/>
            <Route path="/Subscriptions/Edit/:id" component={EditMemberComp}/>
            <Route path="/Subscriptions" component={SubscriptionsComp}/>
            <Route path="/UsersManagment/Edit/:id" component={EditUserComp}/>
            <Route path="/UsersManagment" component={UserManagmentComp}/>       
        </Switch>
        
        </div>
    )
}

export default MainComp;

