import Inputs from "./input/Inputs";

import { useState } from "react";

const Join = ({ setMovieList, movieList }) => {
  const [inputValue, setValue] = useState("");
  const [inputValue2, setValue2] = useState("");
  const [inputValue3, setValue3] = useState("");

  const addFunc = () => {
    if (inputValue === "" && inputValue2 === "" && inputValue3 === "") {
      alert("you should complete this form");
    } else {
      setMovieList([
        ...movieList,
        {
          title: inputValue,
          img: inputValue2,
          ganre: inputValue3,
        },
      ]);
    }
    setValue("");
    setValue2("");
    setValue3("");
  };
  return (
    <div>
      <Inputs
        text="write the movie name"
        value={inputValue}
        setValue={setValue}
      />
      <Inputs text="link for photo" value={inputValue2} setValue={setValue2} />
      <Inputs text="movie ganre" value={inputValue3} setValue={setValue3} />
      <button onClick={() => addFunc()}>add</button>
    </div>
  );
};

export default Join;
