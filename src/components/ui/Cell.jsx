import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
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

export default Cell;
