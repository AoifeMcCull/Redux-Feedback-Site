import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function Support(){
    const dispatch = useDispatch();
    const history = useHistory();
    let [supportToSend, setSupportToSend] = useState(5)

    const handleSupportChange = (event) => {
        setSupportToSend(event.target.value)
    }

    const addSupport = (event) => {
        event.preventDefault();
        dispatch({
            type:'setSupport',
            payload: Number(supportToSend)
        })
        history.push('/Comments')
    }


    return(
        <div>
            <p>Support</p>
            <form onSubmit={(event) => addSupport(event)}>
                <input onChange={handleSupportChange} type='text' placeholder='Support'></input>
                <button type='submit' data-testid='next'>Next</button>
            </form>
        </div>
    )
}

export default Support;