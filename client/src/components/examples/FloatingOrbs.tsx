import FloatingOrbs from '../backgrounds/FloatingOrbs';

export default function FloatingOrbsExample() {
  return (
    <div className="relative h-screen bg-[#0B0B0B]">
      <FloatingOrbs />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h2 className="text-4xl font-bold text-white">Floating Orbs Background</h2>
      </div>
    </div>
  );
}
