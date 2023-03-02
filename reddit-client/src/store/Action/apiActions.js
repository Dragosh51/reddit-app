import axios from 'axios';

const API_ROOT = 'https://www.reddit.com';

export const getSubreddits = () => (dispatch, getState) => {

    // axios
    //     .get(${API_ROOT}/subreddits.json)
    //     .then((res) => {
    //         console.log("FETCH_API", res.data.data);
    //         dispatch({
    //             type: 'FETCH_API',
    //             payload: res.data,
    //         });
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });

    fetch(`${API_ROOT}/subreddits.json`)
        .then(res => res.json())
        .then(res => {
            // console.log("FETCH_API", res.data);
            dispatch({
                type: 'FETCH_API',
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
};

export const getSubredditPosts = (subreddit) => (dispatch, getState) => {

    const sub = JSON.stringify(subreddit)

    fetch(`${API_ROOT}${subreddit.url}.json?limit=20`)
        .then(res => res.json())
        .then(res => {
            // console.log("FETCH_POSTS", res.data);
            dispatch({
                type: 'FETCH_POSTS',
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })

    //  axios
    //     .get(`${API_ROOT}`, sub)
    //     .then((res) => {
    //         console.log("FETCH_API", res.data);
    //         dispatch({
    //             type: 'FETCH_API',
    //             payload: res.data,
    //         });
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
};

// export const getSubredditPosts = async (subreddit) => {
//     const response = await fetch(`${API_ROOT}${subreddit}.json`);
//     const json = await response.json();
//     console.log(json.data);
//     return json.data.children.map((post) => post.data);
//   };
  
//   export const getSubreddits = async () => {
//     const response = await fetch(`${API_ROOT}/subreddits.json`);
//     const json = await response.json();
  
//     return json.data.children.map((subreddit) => subreddit.data);
//   };
  
//   export const getPostComments = async (permalink) => {
//     const response = await fetch(`${API_ROOT}${permalink}.json`);
//     const json = await response.json();
  
//     return json[1].data.children.map((subreddit) => subreddit.data);
//   };