/*//////////////////////////////////////////////////////////////////////////////////////////// */
/* Likes Functionality */
/* Take object keys and compare them to id to know liked or not*/
export const isLiked = (id, likes) => Object.keys(likes).find((item) => (likes[item].id === id)) ? true : false;