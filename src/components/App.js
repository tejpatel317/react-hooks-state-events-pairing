import video from "../data/video.js";
import React, {useState} from "react"
import Video from "./Video.js"
import Button from "./Button.js"
import Comment from "./Comment.js"

function App() {
  console.log("Here's your data:", video);

  const videoLink = video.embedUrl
  const videoTitle = video.title 
  const videoViews = video.views
  const videoDate = video.createdAt
  const numberOfComments = video.comments.length

  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)
  const [commentDisplay, setCommentDisplay] = useState(true)

  const componentOfComments = video.comments.map((percomment) => {
    return (
      <Comment key={percomment.id} user={percomment.user} comment={percomment.comment}/>
    )
  })

  function handleUpVote(e) {
    setUpVotes(()=>upVotes+1)
  }

  function handleDownVote(e) {
    setDownVotes(()=>downVotes+1)
  }

  function handleCommentDisplay(e) {
    setCommentDisplay(!commentDisplay)
  }

  
  return (
    <div className="App">
      <Video videoLink={videoLink} videoTitle={videoTitle} videoViews={videoViews} videoDate={videoDate}/>
      <Button buttonValue={`${upVotes}👍`} handleClick={handleUpVote}></Button>
      <Button buttonValue={`${downVotes}👎`} handleClick={handleDownVote}></Button>
      <br></br>
      <Button buttonValue={commentDisplay ? "Hide Comments" : "Show Comments"} handleClick={handleCommentDisplay}></Button>
      <h2>{numberOfComments} Comments</h2>
      {commentDisplay ? componentOfComments : null}
    </div>
  );
}

export default App;
