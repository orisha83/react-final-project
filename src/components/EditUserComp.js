import {useState, useEffect, useContext} from 'react'
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
import {UsersContext} from './UsersContaxtApi'
import Utils from './Utils'

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
    const [users, setUsers] = useContext(UsersContext);
    const [editUser, setEditUser] = useState("")
    
    const [fname, setFName] = useState("")
    const [lname, setLName] = useState("")
    const [userName, setUserName] = useState("")
    const [sessionTimeOut, setSessionTimeOut] = useState(0)

    const [viewSubscription, setViewSubscription] = useState("")
    const [createSubscription, setCreateSubscription] = useState("");
    const [deleteSubscription, setDeleteSubscription] = useState("")
    const [updateSubscription, setUpdateSubscription] = useState("")
    const [viewMovies, setViewMovies] = useState("")
    const [createMovies, setCreateMovies] = useState("")
    const [deleteMovies, setDeleteMovies] = useState("")
    const [updateMovies, setUpdateMovies] = useState("")


    const assignCheckBoxses = () =>
    {
        if(editUser != "")
        {                
            editUser.data.Permissions.forEach(item =>
            {
                switch(item) {
                    case 'Delete Movies': 
                    setDeleteMovies("Delete Movies")
                    break;
                
                    case 'Create Movies':  
                    setCreateMovies("Create Movies")
                    break;

                    case 'Update Movies':  
                    setUpdateMovies("Update Movies")
                    break;
                
                    case 'View Movies':  
                    setViewMovies("View Movies")
                    break;

                    case 'Create Subscription': 
                    setCreateSubscription("Create Subscription")
                    break;
                
                    case 'Delete Subscription': 
                    setDeleteSubscription("Delete Subscription")
                    break;

                    case 'Update Subscription': 
                    setUpdateSubscription("Update Subscription")
                    break;
                
                    case 'View Subscription':  
                    setViewSubscription("View Subscription")
                    break;
                
                    default:
                    //code here
                    break;
                }
            })
        }
    }

    const clickedUpdate = () =>
    {
        let permissionsObj = []
        if(viewSubscription != "")
        permissionsObj.push(viewSubscription)
        
        if(createSubscription != "")
        permissionsObj.push(createSubscription)
        
        if(deleteSubscription != "")
        permissionsObj.push(deleteSubscription)

        if(updateSubscription != "")
        permissionsObj.push(updateSubscription)

        if(viewMovies != "")
        permissionsObj.push(viewMovies)

        if(createMovies != "")
        permissionsObj.push(createMovies)

        if(deleteMovies != "")
        permissionsObj.push(deleteMovies)

        if(updateMovies != "")
        permissionsObj.push(updateMovies)

        let UserToUsers = {id : props.match.params.id , data : {FirstName : fname, LastName : lname, UserName : userName, SessionTimeOut : sessionTimeOut, CreatedDate : editUser.data.CreatedDate, Permissions : permissionsObj}}
        let UserObjToServer = {FirstName : fname, LastName : lname, UserName : userName, SessionTimeOut : sessionTimeOut, CreatedDate : editUser.data.CreatedDate, Permissions : permissionsObj}
        let UsersArray = users
        let UserIndex = users.findIndex(x => x.id == UserToUsers.id )
        if(UserIndex >= 0 )
        {
            UsersArray[UserIndex] = UserToUsers
            setUsers(UsersArray)
             Utils.updateServer('Users', UserToUsers.id, UserObjToServer)
        }
    }

    const form = () => 
    {
      let userIndex = users.findIndex(x => x.id == props.match.params.id )
      if(userIndex >= 0 )
      {
        setEditUser(users[userIndex])
        setFName(users[userIndex].data.FirstName)
        setLName(users[userIndex].data.LastName)
        setUserName(users[userIndex].data.UserName)
        setSessionTimeOut(users[userIndex].data.SessionTimeOut)
      }     
    }

    useEffect(() => {
      form()
    },[])

    useEffect(() => {
        assignCheckBoxses()
      },[editUser])


      useEffect(() =>
    {
        if(createSubscription != "" && deleteSubscription != "" && updateSubscription != "")
        {
            setViewSubscription("View Subscription")
        }
        else
        {
            setViewSubscription("")
        }
    },[createSubscription, deleteSubscription, updateSubscription])

    useEffect(() =>
    {
        if(createMovies != "" && deleteMovies != "" && updateMovies != "")
        {
            setViewMovies("View Movies")
        }
        else
        {
            setViewMovies("")
        }
    },[createMovies, deleteMovies, updateMovies])

       return(
        <div>
            <Grid container direction="column" justify="center" alignItems="center">
                <FormGroup className={classes.paper}>
                    <h3>Edit User : {props.match.params.name}</h3>
                
                    First Name:<TextField required id="outlined-basic" placeholder={editUser && editUser.data.FirstName} onChange={e =>setFName(e.target.value)} variant="outlined"/><br/>
                    Last Name:<TextField required id="outlined-basic" placeholder={editUser && editUser.data.LastName} onChange={e =>setLName(e.target.value)} variant="outlined" /><br/>
                    User Name:<TextField required id="outlined-basic" placeholder={editUser && editUser.data.UserName} onChange={e =>setUserName(e.target.value)} variant="outlined" /><br/>
                    Session time out (Minuts):
                    <TextField required id="outlined-basic" placeholder={editUser && editUser.data.SessionTimeOut} onChange={e =>setSessionTimeOut(e.target.value)} variant="outlined" /><br/>
                    Created date : {editUser && editUser.data.CreatedDate.toDate().toString()}<br/>
                    <h3>Permissions :</h3>
                    <FormGroup row>
                        <FormControlLabel control={<Checkbox checked={viewSubscription} onChange={e => {if(e.target.checked){setViewSubscription(e.target.name)}else{setViewSubscription("")}}} size="small"/>}label="View Subscription" name="View Subscription"/>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <FormControlLabel control={<Checkbox checked={createSubscription} onChange={e => {if(e.target.checked){setCreateSubscription(e.target.name)}else{setCreateSubscription("")}}} size="small"/>}label="Create Subscription" name="Create Subscription"/>
                        <FormControlLabel control={<Checkbox checked={deleteSubscription} onChange={e => {if(e.target.checked){setDeleteSubscription(e.target.name)}else{setDeleteSubscription("")}}} size="small"/>}label="Delete Subscription" name="Delete Subscription"/>
                    </FormGroup>
                    <FormGroup row>
                        <FormControlLabel control={<Checkbox checked={updateSubscription} onChange={e => {if(e.target.checked){setUpdateSubscription(e.target.name)}else{setUpdateSubscription("")}}} size="small"/>}label="Update Subscription" name="Update Subscription"/>
                        <FormControlLabel control={<Checkbox checked={viewMovies} onChange={e => {if(e.target.checked){setViewMovies(e.target.name)}else{setViewMovies("")}}} size="small"/>}label="View Movies" name="View Movies"/>
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                        <FormControlLabel control={<Checkbox checked={createMovies} onChange={e => {if(e.target.checked){setCreateMovies(e.target.name)}else{setCreateMovies("")}}} size="small"/>}label="Create Movies" name="Create Movies"/>
                    </FormGroup>
                    <FormGroup row>
                        <FormControlLabel control={<Checkbox checked={deleteMovies} onChange={e => {if(e.target.checked){setDeleteMovies(e.target.name)}else{setDeleteMovies("")}}} size="small"/>}label="Delete Movies" name="Delete Movies"/>
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FormControlLabel control={<Checkbox checked={updateMovies} onChange={e => {if(e.target.checked){setUpdateMovies(e.target.name)}else{setUpdateMovies("")}}} size="small"/>}label="Update Movies" name="Update Movies"/>
                    </FormGroup>
                    
                <Grid container direction="row" justify="center" >
                    <Grid item>
                    <Link style={{ textDecoration: 'none' }} to="/UsersManagment"><Button style={{textTransform: 'none'}} startIcon={<UpdateIcon />} variant="contained" size='large' onClick={clickedUpdate}></Button></Link>
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

