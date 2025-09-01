export default function Footer() {
  return (
    <div className=" w-full bg-transparent relative bottom-0 border-t-1">
      {/* Bottom Fade Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
          backgroundSize: '20px 30px',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)',
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)',
        }}
      />
      <div className="py-10 flex flex-col justify-center items-center text-lg font-light">
        Built Through Errors , with every Try and Catch💛
      </div>
    </div>
  );
}
