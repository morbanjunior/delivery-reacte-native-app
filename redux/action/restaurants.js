export const GET_RESTAURANT = 'GET_RESTAURANT';




const YELP_API_KEY = "XzTMzaK2l-oEmR7nXqBvXpD-kD3IVVSPXS91KoUoWT9IfwkfCmoRG_Sc5IHsTEnoN3cI7u03SHrFQz8U7vUK1qWf4HwIlmetiQaov3W_89TcQihTZ5brHxjzCkX4YXYx";

export const getRestaurants = (city) => {
    const API_URL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${YELP_API_KEY}`,
                },
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_RESTAURANT,
                    payload: json
                });
            } else {
                
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        
        console.log(error);
    }
}