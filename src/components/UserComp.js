import {useContext} from 'react'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import {UsersContext} from './UsersContaxtApi'
import {LogInContext} from './LogInContaxtApi'
import Utils from './Utils'


function UserComp(props)
{
    const [users, setUsers] = useContext(UsersContext); 
    const {logInUsers} = useContext(LogInContext)
    const [logInUsersVar,setLogInUsersVar] = logInUsers

    const deleteUser = () =>
    {
        let currentUsersArray = users
        let usersArrayAfterDelete = currentUsersArray.filter(x => x.id != props.userDetails.id)
        setUsers(usersArrayAfterDelete)
        Utils.deleteDataFromServer("Users", props.userDetails.id)


        let currentUsersLoginArray = logInUsersVar
        let usersLoginArrayAfterDelete = currentUsersLoginArray.filter(x => x.id != props.userDetails.id)
        setLogInUsersVar(usersLoginArrayAfterDelete)
        Utils.deleteDataFromServer("UsersLogin", props.userDetails.id)
    }

    const clickedDelete = () =>
    {
        confirmAlert({
            title: 'Are you sure you want to delete User:',  // Title dialog
            message: props.userDetails.data.name,               // Message dialog
            buttons: [
                {
                  label: 'Yes',
                  onClick: () => deleteUser()
                },
                {
                  label: 'No'
                }
              ]
          })
    }
   
       return(
        <div>
            Name :  {props.userDetails.data.FirstName}  {props.userDetails.data.LastName}<br/>
            User Name : {props.userDetails.data.UserName}<br/>
            Session time out (Minuts) : {props.userDetails.data.SessionTimeOut}<br/>
            Created date : {props.userDetails.data && props.userDetails.data.CreatedDate.toDate().toString()}<br/>
            Permissions:
            <ul>
                {props.userDetails.data.Permissions && props.userDetails.data.Permissions.map((item,index) => {return <li key={index}>{item}</li>})}
            </ul>
            <Grid container direction="row" justify="center" >
                <Grid item>
                    <Link to={`/UsersManagment/Edit/${props.userDetails.id}`} style={{ textDecoration: 'none' }}><Button style={{textTransform: 'none'}} startIcon={<EditIcon />} size='large' variant="contained"></Button></Link>
                </Grid>
                <Grid item>
                    <Button style={{textTransform: 'none'}} variant="contained" startIcon={<DeleteIcon />} size='large' onClick={clickedDelete}></Button> 
                </Grid>
            </Grid> 
        </div>
    )
}

export default UserComp;

