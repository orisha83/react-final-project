import {useState, useContext, useEffect, useRef} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';
import FormGroup from '@material-ui/core/FormGroup';
import {MoviesContext} from "./MoviesContaxtApi";
import Utils from './Utils'


const AddMovieComp = (params) =>
{
    const [title, setTitle] = useState("")
    const [genres, setGenres] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [premierd, setPremierd] = useState()
    const [movies, setMovies] = useContext(MoviesContext);
    const [newId, setNewId] = useState(0)
    const [pressed, setPressed] = useState(false)

    const clickedSave = async () =>
    {
        let genresArry = genres.split(" ")
        let moviesObj = {Title : title, date : premierd, ImageUrl : imageUrl, Genres : genresArry}
        let res = await Utils.sendDataToServer('Movies', moviesObj)
        setNewId(res.id)
        params.clickedAllMovies()
    }

    const initialRender = useRef(true);
    useEffect(() =>
    {
        console.log("useEffect - 1")
        if(initialRender.current){
            console.log("useEffect - 2")
            initialRender.current = false;
        }else{
                console.log("useEffect - 3")
                let genresArry = genres.split(" ")
                let moviesObjtoMovies = {id : newId , data : {Title : title, date : premierd, ImageUrl : imageUrl, Genres : genresArry}}
                let currentMoviesArray = movies
                currentMoviesArray.push(moviesObjtoMovies)
                setMovies(currentMoviesArray)
                setPressed(true)
            }
    },[newId])

    return(
        <div>
            <br/>
            <FormGroup>
                Name :  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<TextField required label="Required" variant="outlined" size="small" onChange={e =>setTitle(e.target.value)}/><br/>
                Genres : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<TextField variant="outlined" size="small" onChange={e =>setGenres(e.target.value)}/><br/>
                Image URL : <TextField variant="outlined" size="small" onChange={e =>setImageUrl(e.target.value)}/><br/>
                Premierd : &nbsp;&nbsp;&nbsp;<TextField variant="outlined" size="small" onChange={e =>setPremierd(e.target.value)}/>
            </FormGroup><br/><br/>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button style={{textTransform: 'none'}} startIcon={<SaveIcon />} size="large" variant="contained" onClick={clickedSave}></Button>  
            <Button style={{textTransform: 'none'}} startIcon={<CancelIcon />} variant="contained" size="large" onClick={() => params.clickedAllMovies()}></Button>

        </div>
    )
}

export default AddMovieComp;

