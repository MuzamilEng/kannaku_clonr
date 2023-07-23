import React, {useState} from 'react'
import { Rating } from '@material-ui/lab';

function RatingComponent({rating}) {
  const [ratingValue, setRatingValue] = useState(rating);
  return (
    <Rating
        name="Rating Label"  
        value={ratingValue}
        onChange={(event, newValue) => {
        setRatingValue(newValue);
        }}
    />
  )
}

export default RatingComponent