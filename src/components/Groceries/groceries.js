import React,{ useState, useEffect } from 'react' 
import axios from 'axios'

function Groceries(){

    const [groceries,setGroceries] = useState(null)

    useEffect(() => {
        console.log('in useeffect')
        axios.get('family/allgroceryitems/Raman')
        .then(res => {
            console.log(res.data)
            setGroceries(res.data)
        })
    },[])

    return(
        <div>
            {console.log(groceries)}
        </div>
    )
}

export default Groceries