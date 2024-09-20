
import { Box, Button, Skeleton } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const CardSkeleton = () => {
  return (
    <Card sx={{ maxWidth: 421, marginBottom: 10 }} className='card'>
      <CardActionArea>
        <Box sx={{ height: 240, bgcolor: 'grey.300' }}>
          <Skeleton variant="rectangular" height="100%" width="100%" />
        </Box>
        <CardContent className='card-content'>
          <Typography gutterBottom component="div" className='card-title'>
            <Skeleton width="60%" />
          </Typography>
          <Typography variant="body1" className='card-date'>
            <Skeleton width="40%" />
          </Typography>
          <Typography variant="body2" className='card-description'>
            <Skeleton width="80%" />
          </Typography>
          <Button variant="contained" size="small" className='arrow-button'>
            <Skeleton width="100%" />
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardSkeleton;
