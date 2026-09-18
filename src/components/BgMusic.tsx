"use client";

import { colors } from "@/assets/lib/colors";
import { useEffect, useRef, useState, useCallback } from "react";

const SpeakerIcon = ({ isUnmuted }: { isUnmuted: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5 block translate-x-[-1px] translate-y-[0.5px]"
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

    audio.play().catch(() => {});

    audio.addEventListener("volumechange", syncMuteState);
    audio.addEventListener("play", syncMuteState);
    audio.addEventListener("pause", syncMuteState);

    return () => {
      audio.removeEventListener("volumechange", syncMuteState);
      audio.removeEventListener("play", syncMuteState);
      audio.removeEventListener("pause", syncMuteState);
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
        console.error("Audio play error:", err);
      }
    }

    audio.muted = !audio.muted;
    setIsUnmuted(!audio.muted);
  };

  return (
    <>
      <style jsx global>{`
        @keyframes cornerExpand {
          0% {
            width: 30px;
            height: 30px;
            opacity: 0.8;
          }
          100% {
            width: 350px;
            height: 350px;
            opacity: 0;
          }
        }

        .corner-wave {
          position: absolute;
          bottom: 0;
          right: 0;
          border-top: 2px solid ${colors.fontcolor2};
          border-left: 2px solid ${colors.fontcolor2};
          border-top-left-radius: 100%;
          pointer-events: none;
          box-sizing: border-box;
          will-change: width, height, opacity;
          animation: cornerExpand 4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }

        .corner-wave-1 {
          animation-delay: 0s;
        }
        .corner-wave-2 {
          animation-delay: -0.8s;
        }
        .corner-wave-3 {
          animation-delay: -1.6s;
        }
        .corner-wave-4 {
          animation-delay: -2.4s;
        }
        .corner-wave-5 {
          animation-delay: -3.2s;
        }
      `}</style>

      <audio ref={audioRef} src="/duffSound.mp3" preload="auto" loop muted />

      {/* Button & Waves Container */}
      <div className="absolute bottom-16 right-4 z-50 h-12 w-12 flex items-center justify-center">
        {isUnmuted && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="corner-wave corner-wave-1" />
            <div className="corner-wave corner-wave-2" />
            <div className="corner-wave corner-wave-3" />
            <div className="corner-wave corner-wave-4" />
            <div className="corner-wave corner-wave-5" />
          </div>
        )}

        <button
          type="button"
          onClick={toggleMute}
          className="relative z-10 flex items-center justify-center h-12 w-12 rounded-full cursor-pointer pointer-events-auto transition-transform duration-200 hover:scale-105 active:scale-95 shadow-xl p-0"
          style={{
            backgroundColor: colors.bgcolor2,
            color: isUnmuted ? colors.fontcolor1 : colors.fontcolor2,
            borderColor: isUnmuted ? colors.bordercolor2 : colors.bordercolor1,
            borderWidth: "1px",
          }}
          aria-label={
            isUnmuted ? "Mute background music" : "Unmute background music"
          }
        >
          <SpeakerIcon isUnmuted={isUnmuted} />
        </button>
      </div>
    </>
  );
}
