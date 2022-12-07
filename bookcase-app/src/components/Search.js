import React from "react";
import PropTypes from 'prop-types'

export const Search = (props) => {
  const { keyword, setKeyword, findBooks } = props;

  function handleChange(changeEvent) {
    setKeyword(changeEvent.target.value);
  }

  function onSubmit(event) {
    event.preventDefault()
      findBooks(keyword)
  }

  return (
    <form> 
        <p style={{color: "pink" }}>
            <em>{keyword && "Keywords Typed: " + keyword}</em>
        </p>
      <input type="text" value={keyword} onChange={handleChange} />
      <input type="submit" onClick={onSubmit} />
    </form>
  );
  };

Search.propTypes = {
    keyword: PropTypes.string,
    setKeyword: PropTypes.func,
    findBooks: PropTypes. func,
}

