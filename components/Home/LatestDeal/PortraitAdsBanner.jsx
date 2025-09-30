export default function PortraitAdsBanner() {
  return (
    <div
      style={{
        backgroundImage: "url(/assets/dummy/portraitBanner.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[650px] rounded-xl relative"
    >
      <span className="absolute top-5 right-5 px-4 py-1 text-sm font-medium bg-yellow-400 text-gray-900 rounded-2xl">
        Advertisement
      </span>
    </div>
  );
}
