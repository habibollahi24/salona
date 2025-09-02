export default function Footer() {
  return (
    <div className=" w-full bg-transparent relative bottom-0 border-t-1">
      {/* Bottom Fade Grid Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
        linear-gradient(to right, var(--secondary) 1px, transparent 1px),
        linear-gradient(to bottom, var(--secondary) 1px, transparent 1px)
      `,
          backgroundSize: '20px 30px',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)',
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)',
        }}
      />
      <div className="py-8 flex flex-col justify-center items-center text-base font-light w-[220px] md:w-full mx-auto">
        Built Through Errors , with every Try and Catch💛
      </div>
    </div>
  );
}
