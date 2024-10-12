import { useHistory } from "react-router-dom";


function EndScreen(){

    const history = useHistory();
    const toStart = () => {
        history.push('/');
    }

    return(
        <div>
            <h1>Thank You!</h1>
            <button onClick={toStart} data-testid="next">Leave New Feedback</button>
        </div>
    )
}

export default EndScreen;