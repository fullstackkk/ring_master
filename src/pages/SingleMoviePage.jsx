import { useState, useEffect } from "react";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";
import Cell from "../components/ui/Cell";
import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
import useService from "../helpers/service";
function SingleMoviePage() {
  const [movie, setMovie] = useState(null);
  const [quote, setQuote] = useState(null);
  const { id } = useParams();
  const { getMovieById, getMovieQuote } = useService();

  const dispatch = useDispatch();

  useEffect(() => {
    if (id === 0) return;
    getMovieById(id).then((res) => {
      setMovie(res.docs[0]);
    });
    getMovieQuote(id).then((res) => {
      setQuote(res);
    });
  }, [id]);

  useEffect(() => {
    if (movie) {
      dispatch({ type: "CHANGE_TITLE", payload: movie.name });
    }
  }, [movie]);

  return (
    <div>
      {movie ? (
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
            {movie.name}
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
              <Cell header="Название" textContent={movie.name} />
              <Cell
                header="Номинаций на Оскар"
                textContent={movie.academyAwardNominations}
              />
              <Cell header="Оскар" textContent={movie.academyAwardWins} />
              <Cell
                header="Зборы за все время"
                textContent={movie.boxOfficeRevenueInMillions + " 000 000 $"}
              />
              <Cell
                header="Бюджет"
                textContent={movie.budgetInMillions + " 000 000 $"}
              />
              <Cell
                header="Продолжительность"
                textContent={movie.runtimeInMinutes + "мин."}
              />
              <Cell
                header="Рейтинг на 'Rotten Tomatoes'"
                textContent={movie.rottenTomatoesScore}
              />
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

export default SingleMoviePage;
