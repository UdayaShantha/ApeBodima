import { Card,CardActionArea,CardContent,CardHeader,Avatar,CardMedia,Typography}from "@mui/material";


const ReviewCardComponent=()=>{
    const cardActionColor={
        actionArea: {
            "&:hover $focusHighlight": {
              opacity:"1",
            }
          },
        focusHighlight: {
            color:"green",
        }
    };
    return (
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea classes={{root: cardActionColor.actionArea,
                focusHighlight: cardActionColor.focusHighlight}}>
                <CardHeader
                    avatar={
                        <Avatar alt="USER NAME FIRST LETTER" 
                        src=""
                        sx={{ width: 24, height: 24 }} 
                        />
                    }
                    title="User name"
                    subheader="Reviewed bodims"
                />
                <CardContent>
                <Typography>
                    REVIEW
                </Typography>
                </CardContent>
                <CardMedia
                component="img"
                height="40"
                src=""
                alt="green iguana"/>
            </CardActionArea>
        </Card>
    )
}

export default ReviewCardComponent;