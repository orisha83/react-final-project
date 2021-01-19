import {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



function CreateAccountComp() 
{

       return(
        <div>
            
            <form autoComplete="off">
                <h1>Movies - Subscription Web Site</h1>
                <h3>Create an Account</h3>
                <TextField required id="outlined-basic" label="User Name" variant="outlined" /><br/><br/>
                <TextField required  id="outlined-basic" label="Password" variant="outlined" /><br/><br/>
                <Button style={{textTransform: 'none'}} variant="contained">Create</Button><br/><br/>
            </form>
          
        </div>
    )
}

export default CreateAccountComp;

