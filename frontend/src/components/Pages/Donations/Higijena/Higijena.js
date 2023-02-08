import React, { useState, useEffect } from "react";
import  {getDonationsByCategory} from "../../../../actions/donations";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import Post from './Post/Post';
import Grid from '@material-ui/core/Grid';
import useStyles from "./style";

const Higijena = () => {

    const dispatch = useDispatch();
    const classes = useStyles();
    const [higijena, setHigijena] = useState({
        type: "Higijena"
      });

      const h = "Higijena";
      useEffect(() => {
        //setHigijena({...higijena, type: h});
        console.log(higijena);
        dispatch(getDonationsByCategory(higijena));
      }, []);

      const { donations, isLoading } = useSelector((state) => state.donations);

      console.log(donations);
      console.log(isLoading);

    return(
        isLoading ? 
        (<CircularProgress/>) : (
          <Grid container className={classes.root}>
          <Grid container item xs={12} alignItems="strech" spacing={6} >
              {donations.map((donation) =>(
                  <Grid key={donation._id} item lg={6} md={12} className={classes.grid}>
                      <Post donation={donation} />
                  </Grid>
              ))}
          </Grid>
      </Grid>
        )
    );
}
export default Higijena;