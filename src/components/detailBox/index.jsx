import Grid from '@mui/material/Grid';

import DetailCard from '../detailCard';
import card2img from '../../img/card2.png';
import card1img from '../../img/card1.png';

export default function DetailBox() {
    return (
        <Grid container spacing={2}>
            <DetailCard 
                title="これはなに" 
                detail="雨雲レーダーの画像から、その地点での撮影時刻の天気を予測するAIです。" 
                imagesrc="https://storage.tenki.jp/archive/radar/2023/03/28/15/00/00/pref-16-small.jpg">
            </DetailCard>
            <DetailCard 
                title="どうやって使うの" 
                detail="「UPLOAD IMAGE」で画像をアップロードし「PREDICT」を押すだけです。"
                imagesrc={card1img}>
            </DetailCard>
            <DetailCard 
                title="精度は？" 
                detail="おおよそ85%です。CNNベースのオリジナルモデルを使用しています。"
                imagesrc={card2img}>
            </DetailCard>
        </Grid>
    );
}