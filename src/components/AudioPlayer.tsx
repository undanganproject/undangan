import { useEffect, useRef, useState } from 'react';
import { Music, Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  autoPlayTrigger: boolean;
}

export default function AudioPlayer({ autoPlayTrigger }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Traditional Gamelan track
  const audioUrl = 'https://archive.org/download/GamelanDegung/02-Asih-Asih.mp3';

  useEffect(() => {
    const audio = new Audio(audioUrl);
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.log('Autoplay blocked or failed:', error));
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error(err));
    }
  };

  return (
    <div id="audio-player-container" className="fixed bottom-6 left-6 z-50">
      <button
        id="audio-toggle-button"
        onClick={togglePlay}
        className="relative flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-[#DDBE82] shadow-lg group transition-transform duration-300 hover:scale-110"
        title="Gamelan Traditional Modern - Nocopyright"
      >
        {/* Vinyl Image */}
        <div
          id="music-vinyl-disc"
          className={`absolute inset-0 w-full h-full rounded-full bg-cover bg-center shadow-md transition-transform ${
            isPlaying ? 'animate-spin-slow' : 'opacity-90'
          }`}
          style={{
            backgroundImage: 'url("https://vitopia.co/assets/images/vinyl.png")',
          }}
        />

        {/* Floating icon */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full">
          {isPlaying ? (
            <Music className="w-5 h-5 text-[#DDBE82] animate-pulse" />
          ) : (
            <Play className="w-5 h-5 text-white translate-x-[1px]" />
          )}
        </div>
      </button>
    </div>
  );
}
