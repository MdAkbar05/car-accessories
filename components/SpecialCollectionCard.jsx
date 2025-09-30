export default function SpecialCollectionCard({ bannerUrl }) {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="px-8 py-8  rounded-xl  border"
    >
      <div className="space-y-5">
        <p className="text-lg text-primary uppercase">Special Collection</p>
        <h1 className="text-3xl font-bold">Interior Accessories</h1>
        <p className="text-lg font-medium">Don't miss the last opportunity</p>
        <button className="bg-primary text-white px-10 py-2 rounded-full text-lg">
          View
        </button>
      </div>
    </div>
  );
}
