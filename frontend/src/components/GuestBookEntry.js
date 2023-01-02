// import React, { useState } from 'react'

// import moment from 'moment'

// import { baseUrl } from '../config'

// const GuestBookEntry = ({ id, message, likes, createdAt }) => {
//   const [likedByMe, setLikedByMe] = useState(false)
//   const [likesCounter, setLikes] = useState(likes)

//   const sendHeartToApi = () => {
//     fetch(`${baseUrl}/guestbook/${id}/like`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' }
//     }).then((res) => res.json())
//       .then((data) => {
//         // Fetch the number of hearts fresh from API
//         setLikes(data.likes);
//       })
//   }

//   const addHeart = () => {
//     setLikedByMe(true)
//     // Skip posting you have already liked something once
//     if (!likedByMe) {
//       setHearts(heartsCounter + 1)
//       sendHeartToApi()
//     }
//   }

//   const formattedDate = moment(
//     createdAt,
//     'YYYY-MM-DDTHH:mm:ss.SSSZ'
//   )

//   return (
//     <article className="happy-thoughts-entry">
//       <p className="happy-thoughts-entry-text">{message}</p>
//       <div className="likes-and-time-stamp">
//         <span className="happy-thoughts-entry-heart-counter">
//           <button className={likedByMe ? ' button-likes has-likes' : 'button-likes no-likes'} onClick={addHeart} type="button">
//             ❤️
//           </button>
//           x {likesCounter}
//         </span>
//         <span className="happy-thoughts-entry-date-stamp">{formattedDate.fromNow()}</span>
//       </div>
//     </article>
//   )
// }

// export default GuestBookEntry