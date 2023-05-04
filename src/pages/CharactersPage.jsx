import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useService from "../helpers/service";
import useDebounce from "../helpers/dobounce";
import { useDispatch } from "react-redux";
function MainPage() {
  const [characterList, setCharacterList] = useState([]);
  const [characterId, setCharacterId] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [limit, setLimit] = useState(10);
  const debouncedSearchValue = useDebounce(searchValue, 1000);
  const { getAllCharacter, loading } = useService();
  const dispatch = useDispatch();

  useEffect(() => {
    getAllCharacter(limit).then((res) => {
      setCharacterList(res);
    });
    dispatch({ type: "CHANGE_TITLE", payload: "Персонажи" });
  }, [limit]);

  useEffect(() => {
    if (debouncedSearchValue) {
      getAllCharacter("", debouncedSearchValue).then((res) => {
        setCharacterList(res);
      });
    }
    if (debouncedSearchValue === "") {
      getAllCharacter(limit).then((res) => {
        setCharacterList(res);
      });
    }
  }, [debouncedSearchValue]);

  function handleSearch(event) {
    setSearchValue(event.target.value);
  }

  return (
    <Paper
      sx={{
        p: 2,

        margin: "20px 0",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontSize: "34px",
          padding: "10px 0",
        }}
      >
        Персоажи вселенной Властелина Колец
      </Typography>

      <Divider />
      <TextField
        sx={{ m: 1, width: "100%", margin: "10px 0" }}
        id="filled-basic"
        label="Поиск по персонажам"
        onChange={(e) => handleSearch(e)}
        variant="filled"
      />
      {!loading ? (
        <Content
          characterList={characterList}
          limit={limit}
          setLimit={setLimit}
          handleSearch={handleSearch}
          setCharacterId={setCharacterId}
        />
      ) : (
        <Loader />
      )}
    </Paper>
  );
}

const Content = ({
  characterList,
  limit,
  setLimit,

  setCharacterId,
}) => {
  return (
    <>
      {characterList.length > 0 ? (
        <>
          <ul
            style={{
              listStyle: "none",
            }}
          >
            {characterList.length > 0 &&
              characterList.map((character) => {
                return (
                  <li key={character.id}>
                    <h2 onClick={() => setCharacterId(character.id)}>
                      <Link variant="body2" to={`/characters/${character.id}`}>
                        {character.name}
                      </Link>
                    </h2>
                  </li>
                );
              })}
          </ul>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setLimit(limit + 10)}
            sx={{
              margin: "20px auto ",
              display: "block",
            }}
          >
            Загрузить еще
          </Button>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

const Loader = () => {
  return (
    <Stack
      spacing={3}
      sx={{
        width: "100%",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <CircularProgress color="inherit" />
    </Stack>
  );
};

const NotFound = () => {
  return (
    <Paper
      sx={{
        p: 2,

        margin: "20px 0",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontSize: "34px",
          padding: "10px 0",
        }}
      >
        По данному запросу ничего не найдено
      </Typography>
    </Paper>
  );
};

export default MainPage;
