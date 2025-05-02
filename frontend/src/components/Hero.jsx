const Hero = ({ title, subtitle, bgClass, height = "full" }) => {
  return (
    <div className={`${bgClass} bg-cover bg-center bg-no-repeat relative ${height === "full" ? "h-screen" : "h-[60vh]"}`}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="container-custom h-full flex items-center relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{title}</h1>
          {subtitle && <p className="text-xl md:text-2xl">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default Hero;
