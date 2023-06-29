
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
// import IconButton from '@mui/joy/IconButton';
// import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';


export default function BasicCard(props) {
    return (
      <Card className="card" variant="outlined" sx={{ width: 320 }}>
        <div>
          <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
            {props.Title}
          </Typography>
          <Typography level="body2">{props.Date}</Typography>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img
            src={props.PhotoSrc}
            // srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent orientation="horizontal">
          <div>
            <Typography level="body3">Total price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              $2,900
            </Typography>
          </div>
          <Button
            variant="solid"
            size="sm"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: 'auto', fontWeight: 600 }}
          >
            Explore
          </Button>
        </CardContent>
      </Card>
        );
    }
