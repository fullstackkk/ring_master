import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useService from "../helpers/Service";

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
    if (!character) return;
    dispatch({
      type: "UPDATE_TITLE",
      payload: character.name,
    });
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
              maxWidth: 500,
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
              <Cell header="Расса" textContent={character.race} />
              <Cell header="Пол" textContent={character.gender} />
              <Cell header="Дата рождения" textContent={character.birth} />
              <Cell header="Дата смерти" textContent={character.death} />

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
          {/* <Skeleton variant="rectangular" width={"100%"} height={60} />
          <Skeleton variant="rectangular" width={"50%"} height={80} />
          <Skeleton variant="rounded" width={"50%"} height={60} />
          <Skeleton variant="rounded" width={"50%"} height={80} />
          <Skeleton variant="rounded" width={"50%"} height={60} />
          <Skeleton variant="rounded" width={"50%"} height={80} /> */}
        </Stack>
      )}
    </div>
  );
}

const Cell = ({ header, textContent }) => {
  return (
    <>
      <Grid
        item
        xs={12}
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-end"
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: "24px",
            padding: "10px 0",
          }}
        >
          {header}: &nbsp;
        </Typography>

        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: "30px",
            padding: "10px 0",
          }}
        >
          {textContent}
        </Typography>
      </Grid>
    </>
  );
};

export default SingleCharacterPage;
