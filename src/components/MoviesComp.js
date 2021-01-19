import {useState, useEffect, useContext } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MovieComp from './MovieComp'
import AddMovieComp from './AddMovieComp'
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { MoviesContext } from "./MoviesContaxtApi";
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

function MoviesComp()
{
    const [allMoviesButtonColor,setAllMoviesButtonColor] = useState("primary")
    const classes = useStyles()
    const [useSearch, setUseSearch] = useState(true)
    const [addMoviesButtonColor,setAddMoviesButtonColor] = useState("")
    const [searchWord, setSearchWord] = useState("")
    const [movies, setMovies] = useContext(MoviesContext);
    const [allMoviesPage, setAllMoviesPage] = useState(true)
    const [addMoviesPage, setAddMoviesPage] = useState(false)
    const [filteredMovies, setFilteredMovies] = useState()

    let searchChanged =  (e) =>
    {
        setSearchWord(e.target.value.toUpperCase())
    }

    let page = () =>
    {
        console.log("page")
        let filteredMovies
        if(searchWord != "")
        {
            filteredMovies = movies.filter(x => x.data.Title.toUpperCase().startsWith(searchWord))
        }
        else
        {
            filteredMovies = movies
        }
        setFilteredMovies(filteredMovies)
    }

    useEffect(() =>  {
        page()
    },[searchWord, movies])

    const clickedAllMovies = () => 
    {
        setSearchWord("")
        setAddMoviesButtonColor("")
        setAllMoviesButtonColor("primary")
        setUseSearch(true)
        setAllMoviesPage(true)
        setAddMoviesPage(false)
        page()
    }

    const clickedAddMovies = () => 
    {
        setAllMoviesButtonColor("")
        setAddMoviesButtonColor("primary")
        setUseSearch(false)
        setAllMoviesPage(false)
        setAddMoviesPage(true)
    }

       return(
           
        <div>
            <Grid container direction="column" alignItems="center">
                <Grid item>
                <Typography variant="h5" gutterBottom align="center">
                Movies
                    </Typography>
                   
                </Grid>
                <Grid item container direction="row" justify="center">
                    <Grid item>
                        <Button style={{textTransform: 'none'}} variant="contained" color={allMoviesButtonColor} onClick={clickedAllMovies}>All Movies</Button>
                    </Grid>
                    <Grid item>
                        <Button style={{textTransform: 'none'}} variant="contained" color={addMoviesButtonColor} onClick={clickedAddMovies}>Add Movie</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Grid>
                    <Grid item>
                   {useSearch ? <label><TextField placeholder="e.g., Titanic"  onChange={searchChanged} InputProps={{endAdornment: (<InputAdornment position="end"><IconButton><SearchIcon /></IconButton></InputAdornment>)}}
                            variant="outlined" style={{width: 205}} size="small"/><br/></label> : ""}
                    </Grid>
                </Grid>
                <Grid item container direction="column" alignItems="center">
                    {allMoviesPage && filteredMovies && filteredMovies.map((item,index) => {return <div><Grid item key={index} className={classes.paper}><MovieComp movieDetails={item}/></Grid><br/></div>})}
                    {addMoviesPage && <div className={classes.paper}><AddMovieComp  clickedAllMovies={clickedAllMovies}/></div>}
                </Grid> 
           </Grid>
        </div>    )
}

export default MoviesComp;

