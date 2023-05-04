import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import { useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useService from "../helpers/service";
import Cell from "../components/ui/Cell";
function SingleCharacterPage() {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();
  const { getCharacterById } = useService();

  const dispatch = useDispatch();

  useEffect(() => {
    if (id === 0) return;
    getCharacterById(id).then((res) => {
      setCharacter(res);
    });
  }, [id]);

  useEffect(() => {
    if (character) {
      dispatch({ type: "CHANGE_TITLE", payload: character.name });
    }
  }, [character]);
  return (
    <div>
      {character ? (
        <>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: "34px",
              padding: "10px 0",
              fontWeight: "bold",
            }}
          >
            {character.name}
          </Typography>
          <Paper
            sx={{
              p: 2,
              maxWidth: "100%",
              flexGrow: 1,
              justifyContent: "start",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="flex-start"
            >
              <Cell header="Имя" textContent={character.name} />
              <Divider
                sx={{
                  h: "1px",
                }}
              />
              <Cell header="Расса" textContent={character.race} />
              <Cell header="Пол" textContent={character.gender} />
              <Cell
                header="Дата рождения"
                textContent={character.birth ? character.birth : "Не указано"}
              />
              <Cell
                header="Дата смерти"
                textContent={character.death ? character.death : "Не указано"}
              />

              <Button
                variant="outlined"
                color="primary"
                sx={{
                  margin: "0 10px ",
                }}
              >
                <Link href={character.wikiUrl} underline="none">
                  Посетить страницу на Википедии
                </Link>
              </Button>
            </Grid>
          </Paper>
        </>
      ) : (
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
      )}
    </div>
  );
}

export default SingleCharacterPage;
