import { Grid, Box, Button } from "@mui/material";
import Typography from '@mui/joy/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

import { useState } from 'react';

export default function PredictCard(props){
    const [src, setImage] = useState("https://thumb.ac-illust.com/39/3920178d66157451930de97cc5431a64_t.jpeg");
    const [disabled, setDisabled] = useState(true);

    const changeImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                setImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
        setDisabled(false);
    };
    return (
        <>
            <Grid item xs={12} sm={6} sx={{padding:'2%'}}>
                <Typography level="h3" 
                            component="div"
                            sx={{borderBottom: '2', 
                                 borderBottomStyle: 'solid' , 
                                 marginBottom: "2%", 
                                 color: "rgb(24,118,210)"}}>
                    検証
                </Typography>
                <Box sx={{textAlign:'center'}}>
                    <form onSubmit={props.handle}>
                        <Button component="label" variant="outlined" size="large" color="primary" 
                                startIcon={<CloudUploadIcon />} sx={{margin: "10px 0"}}>
                            Upload image
                            <input type="file" name="file" accept="image/jpeg" onChange={changeImage} hidden required/>
                        </Button>
                        <br/>
                        <Button component="label" variant="contained" size="large" color="success" 
                                startIcon={<DownloadDoneIcon />} sx={{margin: "10px 0"}} disabled={disabled}>
                            Start Predict
                            <input type="submit" hidden/>
                        </Button>   
                    </form>
                </Box>
                <Box sx={{textAlign:'center'}}>
                    <img src={src} alt="yourImage" 
                            style={{width: '100%', height:'300px', objectFit:'cover', 
                                    border:'3px double rgb(24,118,210)', borderRadius:'20px'}}></img>
                </Box>
            </Grid>
        </>
    );
};
