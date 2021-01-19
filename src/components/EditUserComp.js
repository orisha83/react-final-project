import {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom'
import CancelIcon from '@material-ui/icons/Cancel';
import UpdateIcon from '@material-ui/icons/Update';
import FormGroup from '@material-ui/core/FormGroup';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Utils from './Utils'
import './Main.css'

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



function EditUserComp(props)
{
    const classes = useStyles()
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
      };

       return(
        <div>
            <Grid container direction="column" justify="center" alignItems="center">
                <FormGroup className={classes.paper}>
                    <h3>Edit User : {props.match.params.name}</h3>
                
                    First Name:<TextField required id="outlined-basic" value={props.match.params.name} variant="outlined"/><br/>
                    Last Name:<TextField required id="outlined-basic" value="Hello World" variant="outlined" /><br/>
                    User Name:<TextField required id="outlined-basic" value="Hello World" variant="outlined" /><br/>
                    Session time out (Minuts):
                    <TextField required id="outlined-basic" value="Hello World" variant="outlined" />
                    <h4>Created data : </h4>
                    <h3>Permissions :</h3>
                    <FormGroup row>
                    <FormControlLabel control={<Checkbox onChange={handleChange} size="small"/>}label="View Subscription" />
                     &nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControlLabel control={<Checkbox onChange={handleChange} size="small"/>}label="Create Subscription"/>
                    <FormControlLabel control={<Checkbox onChange={handleChange} size="small"/>}label="Delete Subscription"/>
                </FormGroup>
                <FormGroup row>
                    <FormControlLabel control={<Checkbox onChange={handleChange} size="small"/>}label="Update Subscription"/>
                    <FormControlLabel control={<Checkbox onChange={handleChange} size="small"/>}label="View Movies"/>
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                    <FormControlLabel control={<Checkbox onChange={handleChange} size="small"/>}label="Create Movies"/>
                </FormGroup>
                <FormGroup row>
                    <FormControlLabel control={<Checkbox onChange={handleChange} size="small"/>}label="Delete Movies"/>
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControlLabel control={<Checkbox onChange={handleChange} size="small"/>}label="Update Movies"/>
                </FormGroup>
                    
                <Grid container direction="row" justify="center" >
                    <Grid item>
                       <Button style={{textTransform: 'none'}} startIcon={<UpdateIcon />} variant="contained" size='large'></Button> 
                    </Grid>
                     <Grid item>
                        <Link style={{ textDecoration: 'none' }} to="/UsersManagment"><Button style={{textTransform: 'none'}} startIcon={<CancelIcon />} size='large' variant="contained"></Button></Link> 
                    </Grid>
                </Grid> 
            </FormGroup>
        </Grid>
            
    </div>
    )
}

export default EditUserComp;

