"use client";

import { useGetRecommendationsQuery } from "@/redux/api/albums";

const Recommendations = () => {
  const { data, error, isLoading } = useGetRecommendationsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading recommendations</p>;

  return (
    <div>
      <h3>Recommendations</h3>
      <div>
        {data?.tracks.map((track) => (
          <div key={track.id}>
            <h5>{track.name}</h5>
            <img
              src={track.album.images[0].url || "/default-image.png"}
              alt={track.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
