import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../user/components/UIElements/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/FormElements/util/validators";

import { useForm } from "../../shared/hooks/form-hook";
import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State building",
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
    title: "Emp. State building",
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

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const foundPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: foundPlace.title,
        isValid: true,
      },
      description: {
        value: foundPlace.description,
        isValid: true,
      },
    },
    true
  );
  useEffect(() => {
    if (foundPlace.title) {
      setFormData(
        {
          title: {
            value: foundPlace.title,
            isValid: true,
          },
          description: {
            value: foundPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
  }, [setFormData, foundPlace]);

  const updateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!foundPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Place not found!</h2>
        </Card>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={updateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a description with at least 5 characters."
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
        onInput={inputHandler}
      />

      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
