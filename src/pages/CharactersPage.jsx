import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useService from "../helpers/Service";
import useDebounce from "../helpers/dobounce";

function MainPage() {
  const [characterList, setCharacterList] = useState([]);
  const [characterId, setCharacterId] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [limit, setLimit] = useState(10);
  const debouncedSearchValue = useDebounce(searchValue, 1000);
  const { getAllCharacter, loading } = useService();

  useEffect(() => {
    getAllCharacter(limit).then((res) => {
      setCharacterList(res);
    });
  }, [limit]);

  useEffect(() => {
    if (debouncedSearchValue) {
      getAllCharacter(limit, debouncedSearchValue).then((res) => {
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
    </div>
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
          <ul>
            {characterList.length > 0 &&
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
        width: "100%",
        flexGrow: 1,
        justifyContent: "center",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
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
