import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {MovieDetail, Cast, Crew} from '../types/movie';



const MovieDetailPage = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [cast, setCast] = useState<Cast[]>([]);
  const [director, setDirector] = useState<Crew | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      setIsLoading(true);
      try {
        const { data: movieData } = await axios.get<MovieDetail>(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
            },
          }
        );
        setMovie(movieData);

        const { data: creditsData } = await axios.get<{ cast: Cast[]; crew: Crew[] }>(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
            },
          }
        );

        const directorData = creditsData.crew.find((member) => member.job === 'Director') || null;
        setDirector(directorData);
        setCast(creditsData.cast.slice(0, 5)); // Limit to 5 cast members
      } catch (error) {
        console.error('Error fetching movie details or credits:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieId) {
      fetchMovieDetail();
    }
  }, [movieId]);

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-red-500 text-2xl">영화 정보를 불러오는 중 오류가 발생했습니다.</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-gray-500 text-xl">로딩 중...</span>
      </div>
    );
  }

  if (!movie) {
    return null;
  }

  return (
    <div className="p-10">
      <div className="flex flex-col rounded-2xl bg-gray-1000 md:flex-row gap-8">

        <div className="flex-shrink-0">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg shadow-lg"
          />
        </div>


        <div className="flex flex-col gap-4">
          <h1 className=" text-4xl text-white font-bold">{movie.title}</h1>
          <p className="text-gray-200">
            {movie.release_date} | {movie.runtime}분 |{' '}
            {movie.genres.map((genre) => genre.name).join(', ')}
          </p>
          <p className="text-lg text-gray-200">{movie.overview}</p>
          <p className="text-md text-gray-400">평점: {movie.vote_average} / 10</p>


          {director && (
            <div>
              <h2 className="text-xl font-bold text-gray-400">감독</h2>
              <p className="text-gray-200">{director.name}</p>
            </div>
          )}


          <div>
            <h2 className="text-xl text-gray-400 font-bold">출연진</h2>
            <div className="flex gap-4">
              {cast.map((actor) => (
                <div key={actor.id} className="flex flex-col items-center">
                  {actor.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                      alt={actor.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-sm text-gray-200">No Image</span>
                    </div>
                  )}
                  <p className="text-sm text-gray-200 font-bold">{actor.name}</p>
                  <p className="text-xs text-gray-300">{actor.character}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;