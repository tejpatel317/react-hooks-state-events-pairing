import React from "react"

function Video({videoLink, videoTitle, videoViews, videoDate}) {
    return(
        <>
            <iframe
                width="919"
                height="525"
                src={videoLink}
                frameBorder="0"
                allowFullScreen
                title={videoTitle}
            />
            <h1>{videoTitle}</h1>
            <p>{videoViews} Views | Uploaded {videoDate}</p>
        </>
    )
}

export default Video