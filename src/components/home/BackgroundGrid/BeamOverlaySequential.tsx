export default function BeamOverlaySequential({
  gridSize = 200,
  vColumnIndex = 3,
  hRowIndex = 1,
  cycle = 5,
  hWidthRatio = 0.7,
  fadeTail = 0.12,
}: {
  gridSize?: number;
  vColumnIndex?: number;
  hRowIndex?: number;
  cycle?: number;
  hWidthRatio?: number;
  fadeTail?: number;
}) {
  const vLeft = gridSize * vColumnIndex;
  const hTop = gridSize * hRowIndex;
  const hWidthVw = `${Math.round(hWidthRatio * 100)}vw`;
  const fadeStop = `${Math.round((1 - fadeTail) * 100)}%`;

  return (
    <>
      <style>{`
        @keyframes beamYSeq {
          0%   { transform: translateY(-20%); opacity: 0; }
          4%   { opacity: .55; }                 
          20%  { transform: translateY(120%); opacity: 0; }
          35%  { transform: translateY(-20%); opacity: 0; }
          100% { transform: translateY(-20%); opacity: 0; }
        }
        @keyframes beamXSeq {
          0%   { transform: translateX(20%); opacity: 0; }
          35%  { transform: translateX(20%); opacity: 0; }
          39%  { opacity: .55; }                 
          55%  { transform: translateX(-5%); opacity: 0; }
          100% { transform: translateX(20%); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .beam-anim { animation: none !important; opacity: 0 !important; }
        }
      `}</style>

      <div className="text-white dark:text-black">
        <div
          className="pointer-events-none absolute inset-y-0"
          style={{ left: `${vLeft}px`, width: "2.5px", zIndex: 1 }}
        >
          <div
            className="beam-anim h-full w-full will-change-transform"
            style={{
              backgroundColor: "currentColor",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
              filter: "blur(0.25px)",
              animation: `beamYSeq ${cycle}s linear infinite`,
            }}
          />
        </div>

        <div
          className="pointer-events-none absolute right-0"
          style={{
            top: `${hTop}px`,
            height: "2.5px",
            width: hWidthVw,
            zIndex: 1,
            WebkitMaskImage: `linear-gradient(to left, black 0%, black ${fadeStop}, transparent 100%)`,
            maskImage: `linear-gradient(to left, black 0%, black ${fadeStop}, transparent 100%)`,
          }}
        >
          <div
            className="beam-anim h-full w-full will-change-transform"
            style={{
              backgroundColor: "currentColor",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 35%, black 65%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 35%, black 65%, transparent 100%)",
              filter: "blur(0.25px)",
              animation: `beamXSeq ${cycle}s linear infinite`,
            }}
          />
        </div>
      </div>
    </>
  );
}
