import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
export default function CoursesCard({course:{name,image,duration,stream}}) {
  return (
    <Card className=' hover:scale-105 cursor-pointer duration-200 transition-all hover:border-2 border-violet-600'
      variant="soft"
      color='primary'
      invertedColors
      sx={{
        boxShadow: 'lg',
         width: {md:250,xs:'100%'},
        maxWidth: '100%',
        // to make the demo resizeable
        overflow: 'auto',
      }}
    >
      <div>
      <AspectRatio minHeight="120px" maxHeight="500px">
        <img
          src={image}
          srcSet={image}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
        <Typography level="h2">
        {name}
        </Typography>
      </div>
      <CardContent>
      <Chip size="lg" variant="soft">
          {stream}
        </Chip>
        <Typography sx={{ml:1,fontWeight:700,display:'flex',gap:1}} level="body-md">
{duration} <p className=' font-normal'>Course</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button  variant="solid">Learn More</Button>
      </CardActions>
    </Card>
  );
}