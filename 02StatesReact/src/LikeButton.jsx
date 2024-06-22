import { useState } from "react";

export default function LikeButton() {
  let [like, setLike] = useState(false);

  let toggleLike = () => {
    setLike(!like); // Can add more state variables to a single component
  };

  let styles = {
    color: "red",
    transition: "all .2s"
  }

  return (
    <p onClick={toggleLike}>

      {like ? (
        <i class="fa-solid fa-heart" style={styles}></i>
      ) : (
        <i class="fa-regular fa-heart"></i>
      )}

    </p>
  );
}
