import React from "react";
import PropTypes from "prop-types";

export function Book(props) {
  console.log(props)
  return (
    <div
      style={{
        backgroundColor: "pink",
        padding: "10px",
        marginBottom: "4px",
      }}
    >
      <h3>{props.title}</h3>
      <img src={props.book.volumeInfo.imageLinks.thumbnail}/>
      <p>{props.authors}</p>
      <p>{props.subtitle}</p>
      <p>{props.selfLink}</p>
      <button onClick={() => props.handleClick(props.id)}>Click me</button>
      {props.retailPrice && props.retailPrice.amount}
    </div>
  );
}


Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  retailPrice: PropTypes.shape({
    amount: PropTypes.number,
  }),
  handleClick: PropTypes.func,
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
    }),
    saleInfo: PropTypes.shape({
      retailPrice: PropTypes.shape({
        amount: PropTypes.number.isRequired,
      }),
    }),
  }),
};