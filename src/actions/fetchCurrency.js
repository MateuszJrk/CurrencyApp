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
