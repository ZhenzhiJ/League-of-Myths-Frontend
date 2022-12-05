import Button from "../Button/Button";

const CreateForm = (): JSX.Element => {
  return (
    <form>
      <div className="character-container">
        <div className="create-form__item">
          <label className="create-form__label--character" htmlFor="name">
            Name:
          </label>
          <input
            className="create-form__input"
            type="text"
            id="name"
            placeholder="Insert name here"
            autoComplete="off"
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
            id="characterRole"
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
          className="create-form__input"
          type="text"
          id="passive"
          placeholder="Insert passive here"
          autoComplete="off"
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
