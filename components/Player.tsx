"use client";

import usePlayer from "@/hooks/usePlayer";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import useGetSongById from "@/hooks/useGetSongById";
import PlayerContent from "./PlayerContent";

// import PlayerContent from "./PlayerContent";

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);

  const songUrl = useLoadSongUrl(song!);
  console.log('song url', songUrl)

  if (!song || !songUrl || !player.activeId) {
    return null;
  }

  return (
    <div 
      className="
        fixed 
        bottom-0 
        bg-black 
        w-full
        h-[80px]
        py-2 
        px-4
      "
    >
      <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
    </div>
  );
}

export default Player;