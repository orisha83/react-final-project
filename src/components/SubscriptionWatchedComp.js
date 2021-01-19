import {useState, useEffect} from 'react'
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


function SubscriptionsWatchedComp()
{
   const [subscriptions, setSubscriptions] = useState([{name : "Avi Cohen" , date : "12/11/1998"}])

       return(
        <div>
          <Typography variant="h5" variantMapping="h1" gutterBottom align="center">
                        Subscriptions watched
                    </Typography>
            
            <ul>
              {
                  subscriptions.map((item,index) =>{
                      return <li key={index}><Link href="#">{item.name}</Link>, {item.date}</li>
                  })
              }
            </ul>
          
        </div>
    )
}

export default SubscriptionsWatchedComp;

