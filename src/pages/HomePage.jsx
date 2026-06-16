import AssetCard from "../components/AssetCard";

export default function HomePage() {
  const assets = [
    {
      id: 1,
      category_id: 4,
      lastPrice: 228.5,
      description: "Big tech hardware e servizi digitali",
      image_url: "/images/apple.png",
      name: "Apple Inc.",
      ticker: "AAPL",
    },
    {
      id: 2,
      category_id: 4,
      lastPrice: 415.3,
      description: "Software enterprise e cloud computing",
      image_url: "/images/microsoft.png",
      name: "Microsoft Corporation",
      ticker: "MSFT",
    },
    {
      id: 3,
      category_id: 4,
      lastPrice: 875.28,
      description: "GPU e infrastrutture AI",
      image_url: "/images/nvidia.png",
      name: "Nvidia Corporation",
      ticker: "NVDA",
    },
    {
      id: 4,
      category_id: 4,
      lastPrice: 140.8,
      description: "Search, advertising e AI",
      image_url: "/images/google.png",
      name: "Google / Alphabet Inc.",
      ticker: "GOOGL",
    },
  ];
  return (
    <div className="container my-5">
      <div className="row g-4">
        {assets.map((asset) => (
          <div key={asset.id} className=" col-12 col-md-6 col-lg-4">
            <AssetCard assetProp={asset} />
          </div>
        ))}
      </div>
    </div>
  );
}
