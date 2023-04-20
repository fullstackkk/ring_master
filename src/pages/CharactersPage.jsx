import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useService from "../helpers/Service";

function MainPage() {
  const [characterList, setCharacterList] = useState([]);
  const [characterId, setCharacterId] = useState(0);

  const { getAllCharacter } = useService();

  useEffect(() => {
    getAllCharacter().then((res) => {
      setCharacterList(res);
    });
  }, []);

  return (
    <div>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontSize: "34px",
          padding: "10px 0",
        }}
      >
        Портал посвященный вселенной Властелина Колец
      </Typography>

      <Divider />
      <TextField
        sx={{ m: 1, width: "100%", margin: "10px 0" }}
        id="filled-basic"
        label="Поиск по персонажам"
        variant="filled"
      />
      <ul>
        {characterList &&
          characterList.map((character) => {
            return (
              <li key={character.id}>
                <h2 onClick={() => setCharacterId(character.id)}>
                  <Link to={`/${character.id}`}>{character.name}</Link>
                </h2>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
export default MainPage;
