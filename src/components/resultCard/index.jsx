import { Grid, Box, 
         List, ListItem, ListItemText, ListItemAvatar, Avatar, 
         Alert, AlertTitle } from "@mui/material";
import Typography from '@mui/joy/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function ResultCard(props) {
    if (props.result){
        return (
            <>
                <Grid item xs={12} sm={6} sx={{padding:'2%'}}>
                    <Typography level="h3" 
                                component="div"
                                sx={{borderBottom: '2', 
                                     borderBottomStyle: 'solid' , 
                                     marginBottom: "2%", 
                                     color: "rgb(24,118,210)"}}>
                        結果
                    </Typography>
                    <Box>
                        <PieChart
                            colors={['#FF8001', '#9B9B9B', '#0074FF']}
                            series={[
                                {
                                data: [
                                    { id: 0, value: props.result.sunny, label: 'Sunny' },
                                    { id: 1, value: props.result.cloudy, label: 'Cloudy' },
                                    { id: 2, value: props.result.rainy, label: 'Rainy' },
                                ],
                                highlightScope: { faded: 'global', highlighted: 'item' },
                                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                },
                            ]}
                            width={400}
                            height={200}
                        />
                    </Box>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar sx={{bgcolor:'#FF8001'}}>
                                <WbSunnyIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Sunny" secondary={props.result.sunny + "%"} />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar sx={{bgcolor:'#9B9B9B'}}>
                                <CloudIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Cloudy" secondary={props.result.cloudy + "%"} />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar sx={{ bgcolor: '#0074FF' }}>
                                <BeachAccessIcon/>
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Rainy" secondary={props.result.rainy + "%"} />
                        </ListItem>
                    </List>
                </Grid>
            </>
        );
    }else{
        return (
            <>
                <Grid item xs={12} sm={6} sx={{padding:'2%'}}>
                    <Typography level="h3" 
                                component="div"
                                sx={{borderBottom: '2', 
                                     borderBottomStyle: 'solid' , 
                                     marginBottom: "2%", 
                                     color: "rgb(24,118,210)"}}>
                        結果
                    </Typography>
                    <Alert variant="outlined" severity="warning">
                        <AlertTitle>画像をアップロードしてください</AlertTitle>
                        <strong>「UPLOAD IMAGE」</strong>を押してレーダーの画像をアップロードし、
                        <strong>「START PREDICT」</strong>で予測を開始してください。
                    </Alert>
                </Grid>
            </>  
        );
    }
}