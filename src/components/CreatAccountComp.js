import {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import FormGroup from '@material-ui/core/FormGroup';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      borderColor : 'black',
      borderStyle: 'solid',
      borderWidth: '2px',
    },
  }));

function CreateAccountComp() 
{
    const classes = useStyles()
       return(
        <div>
            <Grid container direction="column" justify="center" alignItems="center">
            {
            <FormGroup className={classes.paper}>
                       <h2>Create an Account</h2>
                <TextField required id="outlined-basic" label="User Name" variant="outlined" /><br/><br/>
                <TextField required  id="outlined-basic" label="Password" variant="outlined" /><br/><br/>
            <Grid container direction="row" justify="center" >
                <Grid item>
                    <Button style={{textTransform: 'none'}} variant="contained" size='large'>Create</Button>
                </Grid>
                <Grid item>
                    <Link style={{ textDecoration: 'none' }} to="/LogIn"><Button style={{textTransform: 'none'}}  size='large' variant="contained">Cancel</Button></Link>
                </Grid>
            </Grid>
            </FormGroup>
            }
          </Grid>
        </div>
    )
}

export default CreateAccountComp;

