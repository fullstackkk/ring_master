import { Grid } from "@mui/material";
import Card from "../components/ui/Card";
import { useEffect, useState } from "react";
import useService from "../helpers/service";
import { useDispatch } from "react-redux";
function MoviePage() {
  const [movieList, setMovieList] = useState([]);
  const { getAllMovie } = useService();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "CHANGE_TITLE", payload: "Фильмы" });
    getAllMovie().then((res) => {
      setMovieList(res);
    });
  }, []);

  return (
    <>
      <Grid
        container
        spacing={2}
        rowSpacing={1}
        columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        direction="row"
      >
        {movieList.map((movie) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={movie.id}>
              <Card movie={movie} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default MoviePage;
