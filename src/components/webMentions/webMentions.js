import React from "react"
import Img from "gatsby-image"

const WebMentions = ({ edges, postTitle, location }) => {
  // show likes with links to the liker
  // point likes to the nodes where the mention was a 'like'
  const likesRaw = edges.filter(({ node }) => node.wmProperty === "like-of")
  // return the author of the like and the id of the webmention
  const likeAuthors = likesRaw.map(
    ({ node }) => node.author && { wmId: node.wmId, ...node.author }
  )

  // the like avatars
  let likeAvatars = null;
  // the like avatars and their parent container
  let likesDisplay = null;

  if (likesRaw.length > 0){
    likeAvatars = likeAuthors.map(author => {
      return (
        <div className="webmention__like-avatar">
          <a className="webmention__link" href={author.url}>
            <img loading="lazy" height="50" width="50" src={author.photo} alt={author.name} title={author.name} key={author.wmId} className="rounded-full"/>
          </a>
        </div>
        )
      })
    likesDisplay = <div><h4><span>{likesRaw.length} {likesRaw.length === 1 ? "like" : "likes"}</span></h4>
      <div className="webmention__like-container">
      {likeAvatars}
      </div></div>
  }


  // reposts or mentions on Twitter
  const mentionsRaw = edges.filter(({ node }) => node.wmProperty === 'mention-of')
  const mentions = mentionsRaw.map(({ node }) => node.author && { wmId: node.wmId, ...node.author, ...node.content })

  // the mentions (avatar and text)
  let mentionContent = null;
  // the mentions and their parent container
  let mentionsDisplay = null;

  if (mentionsRaw.length > 0){
    mentionContent = mentions.map(author => {
    return (
      <div className="webmention__mention">
        <a className="h-full w-full webmention__link" href={author.url}>
          <img loading="lazy" height="50" width="50" src={author.photo} alt={author.name} title={author.name} key={author.wmId} className="rounded-sm inline-block"/>
        <span className="ml-4 text-sm my-auto">{author.text}</span>
        </a>
      </div>
    )
  })
    mentionsDisplay = (<div>
      <h4><span>{mentionsRaw.length} {mentionsRaw.length === 1 ? "mention" : "mentions"}</span></h4>
      <div className="webmention__mention-container">{mentionContent}</div>
    </div>);
}

  return (
    <div className="webmentions__all">
    <div className="webmentions__header">
      <h3>WEBMENTIONS</h3>
      <a href="https://indieweb.org/Webmention" class="webmentions__info webmention__link" target="_blank" rel="noopener noreferrer" className="text-sm">What’s this?</a>
    </div>
      {likesDisplay}
      {mentionsDisplay}
      <div className="webmentions__add">Want to add to the conversation? <a href={`https://twitter.com/share?text=${postTitle} via @ReyTheDev&url=https://www.fromthemountain.co.za/${location.pathname}`} target="_blank" rel="noopener noreferrer">Tweet about this article</a></div>
    </div>
  )
}

export default WebMentions
