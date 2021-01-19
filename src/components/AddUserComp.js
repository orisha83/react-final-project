import {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Utils from './Utils'


function AddUserComp(params)
{
    const [fname, setFName] = useState("")
    const [lname, setLName] = useState("")
    const [userName, setUserName] = useState("")
    const [sessionTimeOut, setSessionTimeOut] = useState(0)
    const [viewSubscription, setViewSubscription] = useState(false)
    const [createSubscription, setCreateSubscription] = useState(false);
    const [deleteSubscription, setDeleteSubscription] = useState(false)
    const [updateSubscription, setUpdateSubscription] = useState(false)
    const [viewMovies, setViewMovies] = useState(false)
    const [createMovies, setCreateMovies] = useState(false)
    const [deleteMovies, setDeleteMovies] = useState(false)
    const [updateMovies, setUpdateMovies] = useState(false)

    const clickedSave = () =>
    {
        debugger;
        let permissionsObj = {viewSubscription : viewSubscription, createSubscription : createSubscription, deleteSubscription : deleteSubscription,
            updateSubscription : updateSubscription, viewMovies : viewMovies, createMovies : createMovies, deleteMovies : deleteMovies, updateMovies : updateMovies}
        let userObj = {FirstName : fname, LastName : lname, UserName : userName, SessionTimeOut : sessionTimeOut, CreatedDate : new Date(), permissions : permissionsObj}
        Utils.sendDataToServer("Users", userObj)
    }

       return(
        <div>
             <FormGroup>
                First Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<TextField required label="Required" variant="outlined" size="small" onChange={e =>setFName(e.target.value)}/><br/>
                Last Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<TextField required label="Required" variant="outlined" size="small" onChange={e =>setLName(e.target.value)}/><br/>
                User Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<TextField required label="Required" variant="outlined" size="small" onChange={e =>setUserName(e.target.value)}/><br/>
                Session time out (Minuts):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <TextField required label="Required" variant="outlined" size="small" onChange={e =>setSessionTimeOut(e.target.value)}/>
                <h4>Created data : </h4>
                <h3>Permissions :</h3>
            </FormGroup>
            <FormGroup>
            <FormControlLabel control={<Checkbox onChange={e => setViewSubscription(e.target.checked)} size="small"/>}label="View Subscription" name="View Subscription" />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <FormControlLabel control={<Checkbox onChange={e => setCreateSubscription(e.target.checked)} size="small"/>}label="Create Subscription" name="Create Subscription"/>
                <FormControlLabel control={<Checkbox onChange={e => setDeleteSubscription(e.target.checked)} size="small"/>}label="Delete Subscription" name="Delete Subscription"/>
            </FormGroup>
            <FormGroup row>
                <FormControlLabel control={<Checkbox onChange={e => setUpdateSubscription(e.target.checked)} size="small"/>}label="Update Subscription" name="Update Subscription"/>
                <FormControlLabel control={<Checkbox onChange={e => setViewMovies(e.target.checked)} size="small"/>}label="View Movies" name="View Movies"/>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                <FormControlLabel control={<Checkbox onChange={e => setCreateMovies(e.target.checked)} size="small"/>}label="Create Movies" name="Create Movies"/>
            </FormGroup>
            <FormGroup row>
                <FormControlLabel control={<Checkbox onChange={e => setDeleteMovies(e.target.checked)} size="small"/>}label="Delete Movies" name="Delete Movies" />
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FormControlLabel control={<Checkbox onChange={e => setUpdateMovies(e.target.checked)} size="small"/>}label="Update Movies" name="Update Movies"/>
            </FormGroup>
                
            <Grid container direction="row" justify="center" >
                <Grid item>
                    <Button style={{textTransform: 'none'}} startIcon={<SaveIcon />} variant="contained" size='large' onClick={clickedSave}></Button> 
                </Grid>
                <Grid item>
                    <Button style={{textTransform: 'none'}} startIcon={<CancelIcon />} variant="contained" size='large' onClick={() => params.clickedAllUsers()}></Button> 
                </Grid>
            </Grid> 
        </div>
    )
}

export default AddUserComp;

