// creates action to fetch categories from the api
const baseURL = 'http://127.0.0.1:3000'

export const fetchCategories = () => {
    return (dispatch) => {
        fetch(`${baseURL}/categories`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(resp => resp.json())
        .then(categories => {
            dispatch({type: 'FETCH_CATEGORIES', payload: categories})
        }
        ).catch(console.error)
    }
}

// passing data we received from fetch will go to reducer and will
// return a payload from action
// console.log('fetchCategories)