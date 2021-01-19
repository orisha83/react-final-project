import {useState, useEffect} from 'react'
import reportWebVitals from '../reportWebVitals'
import firebase from '../firebase'

function HostComp()
{
    const [data, setData] = useState([])
    const [title, setTitle] = useState('')
    const [year, setYear] = useState()
    const [genres, setGenres] = useState([])
    const [imgUrl, setImgUrl] = useState('')
    const [dataFromServer,setDataFromServer] = useState([])
    let firestore = firebase.firestore();

    const getDataFromServer = (collection) =>
    {
        firestore.collection(collection).get().then(snapshot => {
            console.log(snapshot)
            const DataArr = []
            snapshot.forEach(doc =>{
                const myData = doc.data()
                DataArr.push(myData)
            })
            setDataFromServer(DataArr)
        })
        .catch(error => console.log(error))
    }

    const submit = (collection, Title, date, Genres, ImageUrl ) => {
        firestore.collection(collection).add({
            Title : title,
            date : year,
            Genres : genres,
            ImageUrl : imgUrl
        })
    }

    const sendDataToServer = (collection, jsonObj ) => {
        firestore.collection(collection).add(jsonObj)
    }

    useEffect( async () =>
    {
        getDataFromServer()
    },[])

    useEffect( async () =>
    {
        getDataFromServer()
    },[dataFromServer])




    return(
        <div>
           <h1>Test</h1>
           Title : <input type="text" onChange={e => {setTitle(e.target.value)}}/><br/>
           Year : <input type="text" onChange={e => {setYear(e.target.value)}}/><br/>
           Genres : <input type="text" onChange={e => {setGenres(e.target.value)}}/><br/>
           Image Url : <input type="text" onChange={e => {setImgUrl(e.target.value)}}/><br/>
           <input type="button" value="submit" onClick={submit("Movies")}/><br/>
           
           <input type="button" value="get" onClick={getDataFromServer("Movies")}/>

           <ul>
           {
                dataFromServer.map((item,index) =>
                {
                    return <li key={index}>Title : {item.Title} , Year : {item.date}, Genres : {item.Genres} </li>
                })
            }   
            </ul>

        </div>
    )
}

export default HostComp;

