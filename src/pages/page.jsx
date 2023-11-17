import Box from '@mui/material/Box';

import Header from '../components/header';
import DetailBox from '../components/detailBox';
import PredictBox from '../components/predictBox';
import Footer from '../components/footer';

export default function Page() {
    return (
        <>
            <Header />
            <Box sx={{padding:'3%'}}>
                <Box sx={{backgroundColor:'rgba(255,255,255,0.7)', 
                        padding: '3%',
                        borderRadius:'20px', 
                        height: '100%'}}>
                    <DetailBox />
                    <PredictBox />
                </Box>
            </Box>
            <Footer />
        </>
    );
}