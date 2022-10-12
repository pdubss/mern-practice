import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../../user/components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "empire state building",
    description: "One of the most famous buildings in the world.",
    imageURL:
      "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc3NjU2NzUxNTgwODk1/this-day-in-history-05011931---empire-state-building-dedicated.jpg",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484445,
      lng: -73.9856644,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "empire state building",
    description: "One of the most famous buildings in the world.",
    imageURL:
      "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc3NjU2NzUxNTgwODk1/this-day-in-history-05011931---empire-state-building-dedicated.jpg",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484445,
      lng: -73.9856644,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
