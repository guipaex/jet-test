import { FaStar } from "react-icons/fa";

export default function Rating ({rating}: {rating: number}){
  return (
    <div className="relative w-fit flex items-center">
      <RatingStars top={true} mask={rating} color={`text-gray-900`}/>
      <RatingStars top={false} color="text-gray-400"/>
    </div>
  )
}

interface RatingStarProps {
  top?: boolean,
  mask?: number,
  color:string,
}

function RatingStars({top, mask = 2.5, color}: RatingStarProps) {
  const maskWidth = (mask / 5) * 100;

  if(top) {
    return (
      <div style={{ width: `${maskWidth}%`}} className={`relative z-10 flex overflow-hidden`}>
        <div className={`flex w-fit ${color}`}> {[...Array(5)].map((_, index) => ( <FaStar key={index} /> ))} </div> 
      </div>
    )
  } else {
    return (
      <div className={`absolute z-0 flex`}>
        <div className={`flex justify-center ${color}`}>
          {[...Array(5)].map((_, index) => ( <FaStar key={index} />))}
        </div>
      </div>
    ) 
  }
}