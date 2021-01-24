import {useState, useEffect, useContext} from 'react'
import Button from '@material-ui/core/Button';
import MoviesWatchedComp from './MoviesWatchedComp'
import {Link} from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {MembersContext} from './MembersContextApi'
import {LogInContext} from './LogInContaxtApi'
import {UsersContext} from './UsersContaxtApi'
import Utils from './Utils'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      borderColor : 'black',
      borderStyle: 'solid',
      borderWidth: '2px',
    },
  }));


function MemberComp(props)
{
    const [members, setMembers] = useContext(MembersContext);
    const classes = useStyles()
    const [member, setMember] = useState()
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const {logInUser} = useContext(LogInContext)
    const [logInUserVar,setLogInUserVar] = logInUser
    const [users, setUsers] = useContext(UsersContext);

   const deleteMember = () =>
    {
        let currentMembersArray = members
        let MembersArrayAfterDelete = currentMembersArray.filter(x => x.id != props.memberDetails.id)
        setMembers(MembersArrayAfterDelete)
        Utils.deleteDataFromServer("Members", props.memberDetails.id)
    }

   const clickedDelete = () =>
    {
        confirmAlert({
            title: 'Are you sure you want to delete Member:',  // Title dialog
            message: props.memberDetails.data.Name,               // Message dialog
            buttons: [
                {
                  label: 'Yes',
                  onClick: () => deleteMember()
                },
                {
                  label: 'No'
                }
              ]
          })
    }

    const checkWhichBottonsToShow = () =>
    {
      let currentUser = users.find(x => x.data.UserName == logInUserVar.user)
      if(currentUser)
      {
          currentUser.data.Permissions.forEach(item => {
          if(item == "Update Movies")
          {
            setShowEdit(true)
          }
          if(item == "Delete Movies")
          {
            setShowDelete(true)
          }
        })
      }
    }

    useEffect(() =>
    {
        if(props.memberDetails)
        {
            setMember(props.memberDetails)
            setShowEdit(props.userPermissions.showEdit)
            setShowDelete(props.userPermissions.showDelete)
        }
        else if(props.match.params.id)
        {
            let newMember = members.find(x => x.id == props.match.params.id)
            if(newMember)
            {
                setMember(newMember)
                checkWhichBottonsToShow()
            }
        }
    },[])

       return(
       
            <Grid container direction="column" alignItems="center" >
                <Grid item>
                    <Typography variant="h5" gutterBottom align="center">
                        {member && member.data.Name}<br/>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6" gutterBottom align="left">
                        Email : {member && member.data.Email}<br/>
                        City : {member && member.data.City}
                    </Typography>
                </Grid>
                <Grid item container direction="row" justify="center">
                    <Grid item>
                    {member && showEdit && <Link to={`/Subscriptions/Edit/${member.id}`} style={{ textDecoration: 'none' }}><Button style={{textTransform: 'none'}} startIcon={<EditIcon />} size="large" variant="contained"></Button></Link>}
                    </Grid>
                    <Grid item>
                    {showDelete &&  <Button style={{textTransform: 'none'}} variant="contained" size="large" startIcon={<DeleteIcon />} onClick={clickedDelete}></Button> }
                    </Grid>
                </Grid>
                <br/>
                <Grid item className={classes.paper}>
                    {member && <MoviesWatchedComp memberId={member.id}/>}
                </Grid>
                <br/>
            </Grid>
       
    )
}

export default MemberComp;

