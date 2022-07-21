import MovieDetails from "../../components/MovieDetails";
import { auth } from '../../config/firebase';
import useAuth from '../../hooks/useAuth';

const MovieDetail = () => {
  const { user } = useAuth();
  const isLogin = user ? true : false

  return (
    <MovieDetails/>
    );
};

export default MovieDetail;
