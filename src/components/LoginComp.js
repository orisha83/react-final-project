import {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


function LoginComp()
{

       return(
        <div>
            
            <form autoComplete="off">
                <h1>Movies - Subscription Web Site</h1>
                <h3>Log In Page</h3>
                <TextField required id="outlined-basic" label="User Name" variant="outlined" /><br/><br/>
                <TextField required  id="outlined-basic" label="Password" variant="outlined" /><br/><br/>
                <Button variant="contained">Login</Button><br/><br/>
                Don't have an account yet? <Link href="#">Create a New Account</Link>
            </form>
          
        </div>
    )
}

export default LoginComp;

