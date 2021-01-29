import {useState, useEffect, useContext} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom'
import CancelIcon from '@material-ui/icons/Cancel';
import UpdateIcon from '@material-ui/icons/Update';
import FormGroup from '@material-ui/core/FormGroup';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Utils from './Utils'
import {MoviesContext} from "./MoviesContaxtApi";

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


function EditMovieComp(props)
{
    const classes = useStyles()
    const [genres, setGenres] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [premierd, setPremierd] = useState()
    const [movies, setMovies] = useContext(MoviesContext);
    const [editMovie, setEditMovie] = useState("")

    const clickedUpdate = () =>
    {
        let moviesObjtoMovies = {id : props.match.params.id , data : {Title : editMovie.data.Title, date : premierd, ImageUrl : imageUrl, Genres : genres}}
        let moviesObjtoServer = {Title : editMovie.data.Title, date : premierd, ImageUrl : imageUrl, Genres : genres}
        let moviesArray = movies
        let movieIndex = movies.findIndex(x => x.id == moviesObjtoMovies.id )
        if(movieIndex >= 0 )
        {
          moviesArray[movieIndex] = moviesObjtoMovies
          setMovies(moviesArray)
          Utils.updateServer('Movies', moviesObjtoMovies.id, moviesObjtoServer)
        }
    }

    const updateGenres = (e) =>
    {
      let newGenres = e.target.value
      newGenres = newGenres.split(" ")
      setGenres(newGenres)
    }

    const form = () => 
    {
      let movieIndex = movies.findIndex(x => x.id == props.match.params.id )
      if(movieIndex >= 0 )
      {
        setEditMovie(movies[movieIndex])
        setGenres(movies[movieIndex].data.Genres)
        setImageUrl(movies[movieIndex].data.ImageUrl)
        setPremierd(movies[movieIndex].data.date)
      }     
    }

    useEffect(() => {
      form()
    },[])
   
       return(
        <div >
            <Grid container direction="column" justify="center" alignItems="center">
            {
                <FormGroup className={classes.paper}>
                  <h2>Edit Movie : {editMovie && editMovie.data.Title}</h2>
                  Name : <TextField variant="outlined" value={editMovie && editMovie.data.Title}/><br/>
                  Genres : <TextField variant="outlined" placeholder={editMovie && editMovie.data.Genres} onChange={updateGenres}/><br/>
                  Image URL :  <TextField variant="outlined" placeholder={editMovie && editMovie.data.ImageUrl} onChange={e =>setImageUrl(e.target.value)}/><br/>
                  Premierd :  <TextField variant="outlined" placeholder={editMovie && editMovie.data.date} onChange={e =>setPremierd(e.target.value)}/>
                  <br/>
                  <br/>
                  <FormGroup row>
                    <Link style={{ textDecoration: 'none' }} to="/Movies"><Button style={{textTransform: 'none'}} startIcon={<UpdateIcon />} variant="contained" size='large' onClick={clickedUpdate}></Button></Link>
                    <Link style={{ textDecoration: 'none' }} to="/Movies"><Button style={{textTransform: 'none'}} startIcon={<CancelIcon />} size='large' variant="contained"></Button></Link>
                 </FormGroup>    
                </FormGroup>
            }
            </Grid>
        </div>
    )
}

export default EditMovieComp;

