import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Review(){
    const userFeeling = useSelector(store => store.feeling);
    const userUnderstanding = useSelector(store => store.understanding);
    const userSupport = useSelector(store => store.support);
    const userComments = useSelector(store => store.comments);
    const history = useHistory();

    const feedbackObject = {
        feeling: userFeeling,
        understanding: userUnderstanding,
        support: userSupport,
        comments: userComments
    }

    const sendFeedback = (event) => {
        axios.post('/api/feedback', feedbackObject)
        .then((response) => {
            console.log(response);
            history.push('/EndScreen')
        })
        .catch((err) => {
            console.log('Error posting feedback!', err)
        })
    }

    return(
        <div>
            <h2>Review Your Feedback</h2>

            <p>Feelings: {userFeeling}</p>
            <p>Understanding: {userUnderstanding}</p>
            <p>Support: {userSupport}</p>
            <p>Comments: {userComments}</p>

            <button onClick={sendFeedback} data-testid="next">Submit</button>
        </div>
    )
}

export default Review;