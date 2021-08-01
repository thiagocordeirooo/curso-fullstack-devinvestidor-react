import { cloneElement } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    height: theme.spacing(16)
  },
  containerIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: theme.spacing(12),
    height: theme.spacing(12),
    backgroundColor: ({ color }) => (color ? theme.palette[color].main : theme.palette.grey[400]),
    borderRadius: theme.shape.borderRadius
  },
  icon: {
    fontSize: 48,
    color: "#fff"
  }
}));

const DashboardCardView = ({ title, value, icon, color, handleClick }) => {
  const classes = useStyles({ color });

  return (
    <Grid item xs={12} md={3}>
      <Card>
        <CardActionArea className={classes.root} onClick={handleClick}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <div className={classes.containerIcon}>{cloneElement(icon, { className: classes.icon })}</div>
            </Grid>

            <Grid item>
              <Typography noWrap color="textSecondary">
                {title}
              </Typography>
              <Typography variant="h6">{value}</Typography>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default DashboardCardView;
