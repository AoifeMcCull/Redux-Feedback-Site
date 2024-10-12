import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function Understanding(){
    const dispatch = useDispatch();
    const history = useHistory();
    let [understandingToSend, setUnderstandingToSend] = useState(5)

    const handleUnderstandingChange = (event) => {
        setUnderstandingToSend(event.target.value)
    }

    const addUnderstanding = (event) => {
        event.preventDefault();
        dispatch({
            type:'setUnderstanding',
            payload: Number(understandingToSend)
        })
        history.push('/Support')
    }


    return(
        <div>
            <p>Understanding</p>
            <form onSubmit={(event) => addUnderstanding(event)}>
                <input onChange={handleUnderstandingChange} 
                type='text' 
                placeholder='Understanding'
                data-testid='input'></input>
                <button type='submit' data-testid='next'>Next</button>
            </form>
        </div>
    )
}

export default Understanding;