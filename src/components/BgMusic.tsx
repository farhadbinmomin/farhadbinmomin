'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const colors = {
  bgcolor1: '#0F172A',
  bgcolor2: '#1E293B',
  fontcolor1: '#F8FAFC',
  fontcolor2: '#94A3B8',
  bordercolor1: '#334155',
  bordercolor2: '#475569',
};

const SpeakerIcon = ({ isUnmuted }: { isUnmuted: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 5L6 9H2V15H6L11 19V5Z" />
    {isUnmuted ? (
      <>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" className="opacity-80" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" className="opacity-60" />
      </>
    ) : (
      <>
        <line x1="22" y1="9" x2="16" y2="15" />
        <line x1="16" y1="9" x2="22" y2="15" />
      </>
    )}
  </svg>
);

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isUnmuted, setIsUnmuted] = useState(false);

  const syncMuteState = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      setIsUnmuted(!audio.muted && !audio.paused);
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;
    audio.muted = true;

    audio.play().catch(() => { });

    audio.addEventListener('volumechange', syncMuteState);
    audio.addEventListener('play', syncMuteState);
    audio.addEventListener('pause', syncMuteState);

    return () => {
      audio.removeEventListener('volumechange', syncMuteState);
      audio.removeEventListener('play', syncMuteState);
      audio.removeEventListener('pause', syncMuteState);
    };
  }, [syncMuteState]);

  const toggleMute = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch (err) {
        console.error('Audio play error:', err);
      }
    }

    audio.muted = !audio.muted;
    setIsUnmuted(!audio.muted);
  };

  return (
    <>
      <style jsx global>{`
        @keyframes waveExpand {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(12);
            opacity: 0;
          }
        }

        .wave-container {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 3rem;
          height: 3rem;
          pointer-events: none;
          z-index: 99999;
        }

        .wave-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid ${colors.fontcolor2};
          box-sizing: border-box;
          pointer-events: none;
          will-change: transform, opacity;
          animation: waveExpand 4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }

        .wave-ring-1 { animation-delay: 0s; }
        .wave-ring-2 { animation-delay: -0.8s; }
        .wave-ring-3 { animation-delay: -1.6s; }
        .wave-ring-4 { animation-delay: -2.4s; }
        .wave-ring-5 { animation-delay: -3.2s; }
      `}</style>

      <audio ref={audioRef} src="/duffSound.mp3" preload="auto" loop muted />

      {/* Wave Container - High z-index explicitly outside button scope */}
      <div className="wave-container">
        {isUnmuted && (
          <>
            <div className="wave-ring wave-ring-1" />
            <div className="wave-ring wave-ring-2" />
            <div className="wave-ring wave-ring-3" />
            <div className="wave-ring wave-ring-4" />
            <div className="wave-ring wave-ring-5" />
          </>
        )}

        {/* Sound Toggle Button */}
        <button
          type="button"
          onClick={toggleMute}
          className="relative z-10 grid place-items-center h-12 w-12 rounded-full cursor-pointer pointer-events-auto transition-transform duration-200 hover:scale-105 active:scale-95 shadow-xl"
          style={{
            backgroundColor: colors.bgcolor2,
            color: isUnmuted ? colors.fontcolor1 : colors.fontcolor2,
            borderColor: isUnmuted ? colors.bordercolor2 : colors.bordercolor1,
            borderWidth: '1px',
          }}
          aria-label={isUnmuted ? 'Mute background music' : 'Unmute background music'}
        >
          <SpeakerIcon isUnmuted={isUnmuted} />
        </button>
      </div>
    </>
  );
}