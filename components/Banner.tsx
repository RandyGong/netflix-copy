import Image from 'next/image';
import { useEffect, useState } from 'react';
import { baseUrl } from '../constants/movie';
import { Movie } from '../typings';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import { modalState, movieState } from '../atoms/modalAtom';
import { useRecoilState } from 'recoil';

interface Props {
  netflixOriginals: Movie[];
}

export default function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, []);

  return (
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end'>
      <div className='absolute -z-10 top-0 left-0 h-[95vh] w-screen'>
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout='fill'
          objectFit='cover'
        ></Image>
      </div>

      <h1 className='text-2xl lg:text-7xl md:text-4xl font-bold'>
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className='max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>
        {movie?.overview}
      </p>

      <div className='flex space-x-3'>
        <button className='banner-btn bg-white text-black'>
          <FaPlay className='h-4 w-4 text-black md:h-7 md:w-7' />
          Play
        </button>
        <button
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
          className='banner-btn bg-[gray]/70'
        >
          More Info
          <FaInfoCircle className='h-5 w-5 md:h-8 md:w-8' />
        </button>
      </div>
    </div>
  );
}

// https://api.themoviedb.org/3/movie/550?api_key=7109797d4d7886e6d540f0b6454f1fa8

// API Read Access Token (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTA5Nzk3ZDRkNzg4NmU2ZDU0MGYwYjY0NTRmMWZhOCIsInN1YiI6IjYzNTAwNmI5MDc2Y2U4MDA3YTUxNjA2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K-zdv2SMXTu92C0S0cnn8eOvd_MHRfDHHaFV1iTu1Ks
