import {useContext} from 'react'
import Button from '@material-ui/core/Button';
import SubscriptionWatchedComp from "./SubscriptionWatchedComp"
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {MoviesContext} from "./MoviesContaxtApi";
import Utils from './Utils'
import './Main.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      borderColor : 'black',
      borderStyle: 'solid',
      borderWidth: '2px',
    },
  }));

function MovieComp(props)
{
    const classes = useStyles()
    const [movies, setMovies] = useContext(MoviesContext);

    const deleteMovie = () =>
    {
        console.log("in delete")
        let currentMoviesArray = movies
        let moviesArrayAfterDelete = currentMoviesArray.filter(x => x.id != props.movieDetails.id)
        setMovies(moviesArrayAfterDelete)
        Utils.deleteDataFromServer("Movies", props.movieDetails.id)
    }

    const clickedDelete = () =>
    {
        confirmAlert({
            title: 'Are you sure you want to delete the movie:',                        // Title dialog
            message: props.movieDetails.data.Title,               // Message dialog
            buttons: [
                {
                  label: 'Yes',
                  onClick: () => deleteMovie()
                },
                {
                  label: 'No'
                }
              ]
          })
    }

    //Genres: {props.movieDetails.Genres.join(", ")}
    
    return(
        
            <Grid container direction="column" alignItems="center">
                <Grid item>
                    <Typography variant="h4" gutterBottom align="center">
                    {props.movieDetails.data.Title} , {props.movieDetails.data.date}
                    </Typography>
                    <Typography variant="h6" gutterBottom align="left">
                    Genres: {props.movieDetails.data.Genres.join(", ")}
                    </Typography>
               </Grid>
                <Grid item>    
                </Grid>
                <Grid  container direction="row" justify="space-around" alignItems="flex-start" >
                    <Grid item  >
                        <img src={props.movieDetails.data.ImageUrl} width="200" height="300"/> 
                    </Grid>
                    <Grid item  className={classes.paper}>
                        <SubscriptionWatchedComp />
                    </Grid>
                </Grid>
                <Grid item>
                    <Link to={`/Movies/Edit/${props.movieDetails.id}`} style={{ textDecoration: 'none' }}>
                        <Button style={{textTransform: 'none'}} size='large' startIcon={<EditIcon />} variant="contained"></Button></Link>
                    <Button style={{textTransform: 'none'}} size='large' variant="contained" startIcon={<DeleteIcon />} onClick={clickedDelete}></Button>
                </Grid>
            </Grid>
        
    )
}

export default MovieComp;

