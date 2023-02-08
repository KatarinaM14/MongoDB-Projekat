import { Grid } from '@material-ui/core';
import React , {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getCategory } from '../../../../actions/category';
import WantToDonate from '../WantToDonate';

const Briga = () => {
    const dispatch = useDispatch();
    
       useEffect(() => {
           
        
            dispatch(getCategory("Briga"));
       }, []);
        
    return(
        <Grid>
            <WantToDonate/>
        </Grid>
    );
}
export default Briga;