import LightRays from '../backgrounds/LightRays';

export default function LightRaysExample() {
  return (
    <div className="relative h-screen bg-[#0B0B0B]">
      <LightRays />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h2 className="text-4xl font-bold text-white">Light Rays Background</h2>
      </div>
    </div>
  );
}
