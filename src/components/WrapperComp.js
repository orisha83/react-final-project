import {useEffect} from 'react'
import Utils from './Utils'
import { MoviesContextProvider } from "./MoviesContaxtApi"
import { MembersContextProvider } from './MembersContextApi'
import { UsersContextProvider } from './UsersContaxtApi'
import { SubscriptionsContextProvider } from './SubscriptionsContaxtApi'
import { LogInContextProvider } from './LogInContaxtApi'
import Typography from '@material-ui/core/Typography';
import MainComp from './MainComp'

function WrapperComp()
{
    const loadMembersToServer = async () =>
    {
        let usersUrl = "https://jsonplaceholder.typicode.com/users"
        let users = []
        users = await Utils.getAllItems(usersUrl)

        let usersObj = []
        usersObj = users.map(item => 
        {
            return {Name : item.name, Email : item.email, City : item.address.city}
        })

        usersObj.forEach(x => Utils.sendDataToServer("Members", x))
    }

    const loadMoviesToServer = async () =>
    {
        let moviesUrl = "https://api.tvmaze.com/shows"
        let movies = []
        movies = await Utils.getAllItems(moviesUrl)

        let moviesObj = []
        moviesObj = movies.map(item => 
        {
            return {Title : item.name, date : item.premiered, ImageUrl : item.image.medium, Genres : item.genres}
        })

        moviesObj.forEach(x => Utils.sendDataToServer("Movies", x))
    }

    useEffect( async () => {
        //loadMembersToServer()
        //loadMoviesToServer()
    },[])

       return(
        <div>
             <Typography variant="h3" gutterBottom align="center">
                Movies - Subscription Web Site
            </Typography>
            
            <LogInContextProvider>
            <SubscriptionsContextProvider>
            <UsersContextProvider>
            <MembersContextProvider>
            <MoviesContextProvider>
                <MainComp />
            </MoviesContextProvider>
            </MembersContextProvider>
            </UsersContextProvider>
            </SubscriptionsContextProvider>
            </LogInContextProvider>
        </div>
    )
}

export default WrapperComp;

