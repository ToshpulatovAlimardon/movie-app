import { useParams } from "react-router";

const DetailedPage = () => {
  const { movieId } = useParams();

  return <div>{movieId}</div>;
};

export default DetailedPage;
