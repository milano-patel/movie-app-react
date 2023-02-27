import { useState } from 'react';

const HeaderComp = ({ onSearchSubmit, goHome }) => {
  const [serachInput, setsearchInput] = useState('');
  const changeHandler = (e) => {
    setsearchInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSearchSubmit(serachInput);
    setsearchInput('');
  };

  const goBackHandler = () => {
    goHome();
  };

  return (
    <header>
      <h2 onClick={goBackHandler}>Movie Search App</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          id="search"
          className="search"
          placeholder="Type movie name..."
          value={serachInput}
          onChange={changeHandler}
        />
      </form>
    </header>
  );
};

export default HeaderComp;
