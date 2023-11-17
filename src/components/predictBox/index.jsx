import { Card, CardContent, Grid } from "@mui/material";
import { useState } from "react";

import { postResponse } from '../../response';
import PredictCard from '../predictCard';
import ResultCard from '../resultCard';

export default function PredictBox(){
    const [result, setResult] = useState(null);

    const handlesubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const imgdata = e.target[0].files[0];
        formData.append('file', imgdata);
        const res = await postResponse("/predict", formData);
        setResult(res);
    };
    return (
        <>
            <Card sx={{marginTop:'2%'}}>
                <CardContent variant="outlined" sx={{border: "5px solid rgb(24,118,210)", padding:'1%'}}>
                    <Grid container>
                        <PredictCard handle={handlesubmit}/>
                        <ResultCard result={result}/>
                    </Grid>
                </CardContent>
            </Card>
        </>        
    );
};