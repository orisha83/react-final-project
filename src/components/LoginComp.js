import {useState, useContext} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link, useHistory ,Switch,Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import {LogInContext} from './LogInContaxtApi'

const useStyles = makeStyles((theme) => ({
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

function LoginComp()
{
    const classes = useStyles();
    const [user,setUser] = useState("")
    const [pass,setPass] = useState("")
    const history = useHistory()
    const [isLogedIn,setIsLogedIn] = useContext(LogInContext)

    const clickedLogin = () =>
    {
        console.log(isLogedIn)
        history.push('/')
        setIsLogedIn(true)
    }

    const clickedNewAccount = () =>
    {
        history.push('/NewAccount')
    }

       return(
        <div> 
           
                    <Grid container direction="column" justify="center" alignItems="center">
                        <FormGroup className={classes.paper}>
                            <h2>Log In Page</h2>
                            <TextField required id="outlined-basic" label="User Name" variant="outlined" onChange={e => setUser(e.target.value)}/><br/>
                            <TextField required  id="outlined-basic" label="Password" variant="outlined" onChange={e => setPass(e.target.value)}/><br/>
                            <Grid container direction="row" justify="center" >
                                <Grid item>
                                    <Button style={{textTransform: 'none'}} variant="contained" onClick={clickedLogin}>Login</Button>
                                </Grid>
                                <Grid item container direction="column" alignItems="center"><br/>
                                    Don't have an account yet? 
                                <Button style={{textTransform: 'none'}} variant="contained" onClick={clickedNewAccount}>Create A New Account</Button>
                            </Grid>
                            </Grid>
                        </FormGroup>       
                    </Grid>
                
       
        </div>
    )
}

export default LoginComp;

