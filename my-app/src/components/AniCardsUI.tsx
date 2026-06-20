 import Card from '@mui/material/Card';
 import CardContent from '@mui/material/CardContent';
 import CardMedia from '@mui/material/CardMedia';
 /* import CardActions from '@mui/material/CardActions'; */
 import Typography from '@mui/material/Typography';

 interface AniCardsUIProps {
    name?: string;
    score?: string;
    popularity?: string;
    url?: string;
 }

 export default function AniCardsUI(props: AniCardsUIProps){
    return(
        <Card sx={{ maxWidth: 200, minHeight:500, maxHeight:500 }}>
            <CardMedia
                sx={{ height: 267 }}
                image= {props.url}
                title= {props.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" 
                    sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',  
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                }}>
                    {props.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Score: {props.score}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Popularity: {props.popularity}
                </Typography>
            </CardContent>
        
        </Card>
        
    )
 }