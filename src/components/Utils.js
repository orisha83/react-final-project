import firebase from '../firebase'
import axios from 'axios'

let firestore = firebase.firestore();

const getDataFromServer = async function (collection) 
{
    let snapshot = await firestore.collection(collection).get()
    let DataArr = []
    let myData = ""
    snapshot.forEach(doc =>{
        myData = {data : doc.data() , id : doc.id}
        DataArr.push(myData)
    })
    return DataArr
}

const getSpecificDocFromServer = async function (collection, docId) 
{
    let snapshot = firestore.collection(collection).doc(docId)
    let doc = await snapshot.get()
    if(doc){
        return doc.data()
    }
}

const deleteDataFromServer = async function (collection, id ) 
{
    let response = await firestore.collection(collection).doc(id).delete()
    return response
}

const sendDataToServer = async function (collection, jsonObj ) 
{
    let response = await firestore.collection(collection).add(jsonObj)
    return response
}

const updateServer = function (collection, id , jsonObj ) 
{
    firestore.collection(collection).doc(id).set(jsonObj)
}

const getAllItems = async function(url)
{
  let user = await axios.get(url)
  return user.data
}

export default {sendDataToServer, getDataFromServer, getAllItems, updateServer, deleteDataFromServer, getSpecificDocFromServer};

