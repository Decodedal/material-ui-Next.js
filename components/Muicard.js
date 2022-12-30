import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from "@mui/material"

export default function({width, title, body}){
    return(
        <Box sx={{
            height:'300px',
            width:{
                xs:200,
                sm:300,
                md:400,
                lg:500,
                xl:600,
            },
        }}>
            <Card>
                <CardMedia
                    component='img'
                    height='140'
                    image='http://placekitten.com/g/200/300'
                    alt = 'kitty'
                />
                <CardContent>
                    <Typography gutterBottom varient='h5' component='div'>
                        {title}
                    </Typography>
                    <Typography varient='body2'color='text.secondary'>
                      {body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    ) 
}