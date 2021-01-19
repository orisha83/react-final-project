import {useState, useEffect, useContext} from 'react'
import Button from '@material-ui/core/Button';
import MemberComp from './MemberComp'
import AddMemberComp from './AddMemberComp'
import Grid from '@material-ui/core/Grid';
import {MembersContext} from './MembersContextApi'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
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

  /*
  useState([{Name : "ori shalom", Email : "shalom.ori@gmail.com", City : "Hod Hasharon"},
                                            {Name : "Anat shalom", Email : "anatbarer@gmail.com", City : "TLV"}])
                                            */

function SubscriptionsComp()
{
    const classes = useStyles()
    const [members, setMembers] = useContext(MembersContext);
    const [allMembersPage, setAllMembersPage] = useState(true)
    const [addMembersPage, setAddMembersPage] = useState(false)
    const [allMembersButtonColor,setAllMembersButtonColor] = useState("primary")
    const [addMembersButtonColor,setAddMembersButtonColor] = useState("")

    const clickedAllMembers = () => 
    {
        setAddMembersButtonColor("")
        setAllMembersButtonColor("primary")
        setAllMembersPage(true)
        setAddMembersPage(false)
    }

    const clickedAddMembers = () => 
    {
        setAllMembersButtonColor("")
        setAddMembersButtonColor("primary")
        setAllMembersPage(false)
        setAddMembersPage(true)
    }

       return(
        <div>
            <Grid container direction="column" alignItems="center">
                <Grid item>
                <Typography variant="h5" gutterBottom align="center">
                Subscriptions
                    </Typography>
                </Grid>
                <Grid item container direction="row" justify="center">
                    <Grid item>
                        <Button style={{textTransform: 'none'}} variant="contained" color={allMembersButtonColor} onClick={clickedAllMembers}>All Members</Button> 
                    </Grid>
                    <Grid item>
                        <Button style={{textTransform: 'none'}} variant="contained" color={addMembersButtonColor} onClick={clickedAddMembers}>Add Member</Button>
                    </Grid>
                </Grid>
                <Grid item container direction="column" alignItems="center" >
                    {allMembersPage && members && members.map((item,index) => {return <Grid item key={index} className={classes.paper}><MemberComp memberDetails={item}/></Grid>})}
                    {addMembersPage && <div className={classes.paper}><AddMemberComp clickedAllMembers={clickedAllMembers}/></div>}
                </Grid> 
            </Grid>
        </div>
    )
}

export default SubscriptionsComp;

