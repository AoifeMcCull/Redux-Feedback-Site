import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function Comments(){
    const dispatch = useDispatch();
    const history = useHistory();
    let [commentsToSend, setCommentsToSend] = useState(5)

    const handleCommentsChange = (event) => {
        setCommentsToSend(event.target.value)
    }

    const addComments = (event) => {
        event.preventDefault();
        dispatch({
            type:'setComments',
            payload: commentsToSend
        })
        history.push('/Review')
    }


    return(
        <div>
            <p>Comments</p>
            <form onSubmit={(event) => addComments(event)}>
                <input onChange={handleCommentsChange} type='text' placeholder='Comments'></input>
                <button type='submit' data-testid='next'>Next</button>
            </form>
        </div>
    )
}

export default Comments;