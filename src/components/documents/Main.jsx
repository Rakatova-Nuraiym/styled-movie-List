import styled from "styled-components";
import { useState } from "react";
import style from "./style.module.css";
import Join from "../Join";
import { useEffect } from "react";
// import SecondRender from "./SecondRender";

const Main = () => {
  const [movieList, setMovieList] = useState([
    {
      title: "Один дома",
      img: "https://avatars.mds.yandex.net/i?id=397de79df105731c4899dc85f2ddf16e3a95dea5-11415951-images-thumbs&n=13",
      ganre: "Комедия",
      id: 1,
    },
    {
      title: "Вызов",
      img: "https://avatars.mds.yandex.net/i?id=22ed16c6c37faffc998221ca00d2d0032a7138b1-11386386-images-thumbs&n=13",
      ganre: "Драма",
      id: 1,
    },
    {
      title: "Marvel",
      img: "https://avatars.mds.yandex.net/i?id=c6d1ef71902c781d25a99151aa09edd8412f42c9-10158740-images-thumbs&n=13",
      ganre: "Фантастика",
      id: 1,
    },
  ]);

  const [filteredMovie, setFilteredMovie] = useState([]);

  const [select, setSelect] = useState("все");

  const Card = styled.div`
    width: 280px;
    height: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    background: white;
    gap: 20px;
    border: 1px solid black;
    box-shadow: 0 0 10px 0 black;
    border-radius: 7px;
    padding: 10px;

    &:hover {
      background: hsl(43, 88%, 40%);
    }

    &:hover h2 {
      background: hsl(43.018867924528315, 89.83050847457626%, 11.568627450980392%);
    }
    &:hover p {
      background: hsl(43.018867924528315, 89.83050847457626%, 11.568627450980392%);
    }
  `;


  const Text = styled.p`
    width: 120px;
    text-align: center;
    color: hsl(43, 88%, 40%);
    font-size: 22px;
    font-weight: 900;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 black;
    border: 1px solid black;
  `;

  useEffect(() => {
    console.log(select);
    if (select !== "все") {
      const filtred = movieList.filter((item) => item.ganre === select);
      setFilteredMovie(filtred);
    } else {
      setFilteredMovie(movieList);
    }
  }, [select]);

  const DeleteFunc = (id) => {
    const filtered = movieList.filter((item) => item.id !== id);
    setFilteredMovie([...filtered]);
    setMovieList([...filtered]);
  };

  return (
    <div className={style.filmComponents}>
      <Join movieList={filteredMovie} setMovieList={setFilteredMovie} />

      <div className={style.mainCard}>
        {filteredMovie.map((item) => {
          return (
            <Card key={item.id}>
              <h2>{item.title}</h2>
              <img src={item.img} alt="" />
              <Text>{item.ganre}</Text>
              <button
                className={style.delte}
                onClick={() => DeleteFunc(item.id)}
              >
                Delete
              </button>
            </Card>
          );
        })}
      </div>
      <select
        className={style.select}
        value={select}
        onChange={(e) => setSelect(e.target.value)}
      >
        <option value="все">все</option>
        <option value="комедия">комедия</option>
        <option value="любовь">любовь</option>
        <option value="фантастика">фантастика</option>
        <option value="ужастик">ужастик</option>
        <option value="драма">драма</option>
      </select>
    </div>
  );
};

export default Main;
