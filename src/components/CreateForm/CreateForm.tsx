import { useState } from "react";
import { ChampionForm } from "../../hooks/useChampion/types";
import useChampion from "../../hooks/useChampion/useChampion";
import Button from "../Button/Button";

const initialChampionData: ChampionForm = {
  name: "",
  role: "",
  passive: "",
  abilityQ: "",
  abilityW: "",
  abilityE: "",
  ultimateR: "",
  image: "",
};

const CreateForm = (): JSX.Element => {
  const [createChampionData, setCreateChampionData] =
    useState(initialChampionData);

  const { createChampion } = useChampion();

  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCreateChampionData({
      ...createChampionData,
      [event.target.id]:
        event.target.id === "image"
          ? (event.target as HTMLInputElement).files![0]
          : event.target.value,
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const createdChampion: ChampionForm = {
      name: createChampionData.name,
      role: createChampionData.role,
      passive: createChampionData.passive,
      abilityQ: createChampionData.abilityQ,
      abilityW: createChampionData.abilityW,
      abilityE: createChampionData.abilityE,
      ultimateR: createChampionData.ultimateR,
      image: createChampionData.image,
    };

    await createChampion(createdChampion);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="create-form__item--image">
        <label className="create-form__label" htmlFor="image">
          {(createChampionData.image as File).name ? (
            <img
              src={URL.createObjectURL(createChampionData.image as File)}
              alt="Your champion"
              className="edit-profile__image"
              aria-label="Your champion"
            />
          ) : (
            <div
              aria-label="Empty image"
              className={"edit-profile__image"}
            ></div>
          )}
        </label>
        <input
          data-testid="input image"
          className="create-form__input--image"
          type="file"
          id="image"
          onChange={handleFormChange}
        />
      </div>

      <div className="character-container">
        <div className="create-form__item">
          <label className="create-form__label--character" htmlFor="name">
            Name:
          </label>
          <input
            value={createChampionData.name}
            className="create-form__input"
            type="text"
            id="name"
            placeholder="Insert name here"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="create-form__item">
          <label
            className="create-form__label--character"
            htmlFor="characterPassive"
          >
            Role:
          </label>
          <select
            className="create-form__input create-form__input--select"
            onChange={handleFormChange}
            id="characterRole"
            required
          >
            {/* <option>Select a role</option> */}
            <option value="top">top</option>
            <option value="jgl">jgl</option>
            <option value="mid">mid</option>
            <option value="adc">adc</option>
            <option value="sup">sup</option>
          </select>
        </div>
      </div>

      <div className="create-form__item">
        <label className="create-form__label--character" htmlFor="passive">
          Passive:
        </label>
        <input
          value={createChampionData.passive}
          className="create-form__input"
          type="text"
          id="passive"
          placeholder="Insert passive here"
          onChange={handleFormChange}
          autoComplete="off"
          required
        />
      </div>

      <div className="character-information-container">
        <div className="character-information__item">
          <label className="character-information__label" htmlFor="abilityQ">
            Ability Q:
          </label>
          <textarea
            id="details"
            placeholder="Insert ability Q here"
            rows={3}
            className="character-information__input character-information__input--textArea"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="character-information__item">
          <label className="character-information__label" htmlFor="abilityW">
            Ability W:
          </label>
          <textarea
            id="details"
            placeholder="Insert ability W here"
            rows={3}
            className="character-information__input character-information__input--textArea"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="character-information__item">
          <label className="character-information__label" htmlFor="abilityE">
            Ability E:
          </label>
          <textarea
            id="details"
            placeholder="Insert ability E here"
            rows={3}
            className="character-information__input character-information__input--textArea"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
        </div>

        <div className="character-information__item">
          <label className="character-information__label" htmlFor="ultimateR">
            Ultimate R:
          </label>
          <textarea
            id="details"
            placeholder="Insert ultimate R here"
            rows={3}
            className="character-information__input character-information__input--textArea"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
        </div>
      </div>

      <Button
        classname="button button--create"
        children={"Create"}
        ariaLabel="Create"
      />
    </form>
  );
};

export default CreateForm;
