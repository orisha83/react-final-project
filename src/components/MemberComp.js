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
import './Main.css'
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

       return(
       
            <Grid container direction="column" alignItems="center" >
                <Grid item>
                    <Typography variant="h5" gutterBottom align="center">
                        {props.memberDetails.data.Name}<br/>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6" gutterBottom align="left">
                        Email : {props.memberDetails.data.Email}<br/>
                        City : {props.memberDetails.data.City}
                    </Typography>
                </Grid>
                <Grid item container direction="row" justify="center">
                    <Grid item>
                        <Link to={`/Subscriptions/Edit/${props.memberDetails.id}`} style={{ textDecoration: 'none' }}><Button style={{textTransform: 'none'}} startIcon={<EditIcon />} size="large" variant="contained"></Button></Link>            
                    </Grid>
                    <Grid item>
                        <Button style={{textTransform: 'none'}} variant="contained" size="large" startIcon={<DeleteIcon />} onClick={clickedDelete}></Button> 
                    </Grid>
                </Grid>
                <br/>
                <Grid item className={classes.paper}>
                    <MoviesWatchedComp memberId={props.memberDetails.id}/>
                </Grid>
                <br/>
            </Grid>
       
    )
}

export default MemberComp;

