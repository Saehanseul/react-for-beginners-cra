import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const params = useParams();
  const getMovie = async () => {
    const res = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`
    );
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return <h1>{`Detail: ${params.id}`}</h1>;
}

export default Detail;
