//API key: 6fb9d26cd6f6248bc1dd

export const fetchCurrency = () => {
  return async function(dispatch) {
    await fetch(
      "https://free.currconv.com/api/v7/convert?q=PLN_EUR,EUR_PLN&compact=ultra&apiKey=6fb9d26cd6f6248bc1dd"
    )
      .then(res => {
        return res.json();
      })
      .then(JSONres => {
        dispatch({
          type: "FETCH_CURRENCY",
          payload: JSONres
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// export const FETCH_DATA = "FETCH_DATA";

// export const fetchData = async () => {
//   const url = `https://free.currconv.com/api/v7/convert?q=PLN_EUR,EUR_PLN&compact=ultra&apiKey=6fb9d26cd6f6248bc1dd`;
//   const request = await fetch(url).then(res => res.json());
//   const data = request;
//   return {
//     type: FETCH_DATA,
//     payload: data
//   };
// };
// import axios from "axios";

// const fetchMovie = () => {
//   return dispatch => {
//     const url =
//       "https://free.currconv.com/api/v7/convert?q=PLN_EUR,EUR_PLN&compact=ultra&apiKey=6fb9d26cd6f6248bc1dd";
//     axios
//       .get(url)
//       .then(res => {
//         dispatch(fetchCurrency(res.data.results, res.status));
//       })
//       .catch(err => {
//         console.log(err); //handle error if you want
//       });
//   };
// };

// export const fetchCurrency = (results, status) => {
//   return {
//     type: "FETCH_CURRENCY",
//     payload: results,
//     status: status
//   };
// };
