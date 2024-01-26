import style from "../documents/style.module.css";

const Inputs = ({ value, setValue, text }) => {
  return (
    <input
      className={style.inputs}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={text}
    ></input>
  );
};

export default Inputs;
