
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { CardActions } from '@mui/material';
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
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent orientation="vertical">
          <div>
            <Typography level="body3">{props.Caption}</Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            size="sm"
            color="neutral"
            aria-label="More"
            sx={{ mr: 'auto', ml:'auto', fontWeight: 600 }}
          >
            more
          </Button>
        </CardActions>
      </Card>
        );
    }
