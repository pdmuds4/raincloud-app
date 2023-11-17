import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/material/Grid';

export default function DetailCard(props){
    return (
        <>
            <Grid item xs={12} md={4}>
                <Card>
                    <CardContent sx={{backgroundColor: "rgba(24,150,230)"}}>
                        <Typography level="h3" component="div" textColor={'white'} 
                                    sx={{borderBottom: '2', borderBottomStyle: 'solid' , marginBottom: "2%"}}>
                            {props.title}
                        </Typography>

                        <Typography variant="body2" sx={{ mb: 1.5 }} textColor={'white'}>
                            {props.detail}
                        </Typography>
                        <Box sx={{textAlign:'center'}}>
                            <img src={props.imagesrc}
                                alt = "detailcard"
                                style={{width: '80%', height:'150px', borderRadius:'20px', objectFit: 'cover'}}/>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>  
        </>        
    );
};