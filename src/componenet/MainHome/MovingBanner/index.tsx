function MovingBanner() {
  return (
    <div className="relative w-full max-w-[100%] h-auto py-[1rem] overflow-x-hidden overflow-y-hidden bg-black">
      <div className="absolute whitespace-nowrap will-change-[transform] animate-[marquee_30s_linear_infinite]">
        <div className="text-[1.2rem] text-white -translate-y-1/2 font-Pretendard">
        &nbsp;&nbsp;2024 COMMENCER &nbsp;♬&nbsp; Vocal&nbsp; ♬&nbsp; Keyboard&nbsp; ♬&nbsp; Electric guitar&nbsp; ♬&nbsp; Bass guitar&nbsp; ♬
          &nbsp;Acoustic guitar&nbsp; ♬&nbsp; Drum&nbsp; ♬&nbsp; MIDI&nbsp;&nbsp;♬&nbsp;&nbsp;2024 COMMENCER &nbsp;♬&nbsp; Vocal&nbsp; ♬&nbsp; Keyboard&nbsp; ♬&nbsp; Electric guitar&nbsp; ♬&nbsp; Bass guitar&nbsp; ♬
          &nbsp;Acoustic guitar&nbsp; ♬&nbsp; Drum&nbsp; ♬&nbsp; MIDI
        </div>
      </div>
    </div>
  );
}

export default MovingBanner;
