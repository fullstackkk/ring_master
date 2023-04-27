import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard({ movie }) {
  const img =
    "https://img.championat.com/s/735x490/news/big/f/r/final-vlastelina-kolec-kolca-vlasti-porazhaet_1665753761769419297.jpg";
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/movie/${movie.id}`}>
          <Button size="small" color="primary">
            Подробнее
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
