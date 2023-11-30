import { RiStarSLine } from "react-icons/ri";
import { RiStarSFill } from "react-icons/ri";

const numToStars = (value) => {
    if (Number(value) === 0) {
      return (
        <>
          <RiStarSLine />
          <RiStarSLine />
          <RiStarSLine />
          <RiStarSLine />
          <RiStarSLine />
          <RiStarSLine />
        </>
      );
    } else if (Number(value) === 1) {
      return (
        <>
          <RiStarSFill />
          <RiStarSLine />
          <RiStarSLine />
          <RiStarSLine />
          <RiStarSLine />
        </>
      );
    } else if (Number(value) === 2) {
      return (
        <>
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSLine />
          <RiStarSLine />
          <RiStarSLine />
        </>
      );
    } else if (Number(value) === 3) {
      return (
        <>
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSLine />
          <RiStarSLine />
        </>
      );
    } else if (Number(value) === 4) {
      return (
        <>
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSLine />
        </>
      );
    } else if (Number(value) === 5) {
      return (
        <>
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
        </>
      );
    }
};

export default numToStars