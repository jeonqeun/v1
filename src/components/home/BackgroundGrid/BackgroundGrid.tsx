import BeamOverlaySequential from "./BeamOverlaySequential";

export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(110%_80%_at_50%_50%,rgba(107,95,174,0.25),transparent_50%)] blur-3xl" />

      <div className="absolute inset-0 [-webkit-mask-image:radial-gradient(120%_120%_at_50%_50%,#000_32%,transparent_75%)] [mask-image:radial-gradient(120%_120%_at_50%_50%,#000_32%,transparent_75%)]">
        <div className="absolute inset-0 [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,#000_12%,#000_100%)] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_12%,#000_100%)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(2,6,23,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.015)_1px,transparent_1px)] [background-size:200px_200px,200px_200px,24px_24px,24px_24px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]" />
        </div>
      </div>

      <BeamOverlaySequential
        gridSize={200}
        vColumnIndex={3}
        hRowIndex={1}
        cycle={5}
        hWidthRatio={0.7}
        fadeTail={0.12}
      />
    </div>
  );
}
