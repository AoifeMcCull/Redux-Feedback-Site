import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function Feeling(){
    const dispatch = useDispatch();
    const history = useHistory();
    let [feelingToSend, setFeelingToSend] = useState(5)

    const handleFeelingChange = (event) => {
        setFeelingToSend(event.target.value)
    }

    const addFeeling = (event) => {
        event.preventDefault();
        dispatch({
            type:'setFeeling',
            payload: Number(feelingToSend)
        })
        history.push('/Understanding')
    }


    return(
        <div>
            <p>Feeling</p>
            <form onSubmit={(event) => addFeeling(event)}>
                <input onChange={handleFeelingChange} type='text' placeholder='Feeling'></input>
                <button type='submit' data-testid='next'>Next</button>
            </form>
        </div>
    )
}

export default Feeling;