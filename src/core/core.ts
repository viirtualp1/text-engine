import {
  type Character,
  type TextEngineSequenceStep,
  type TextEngineSequenceActionDispatch,
} from "../types";

interface TextEngineState {
  characters: Character[];
  sequence: TextEngineSequenceStep[];
}

export class TextEngine {
  state: TextEngineState = {
    characters: [],
    sequence: [],
  };

  public dispatch(action: TextEngineSequenceActionDispatch) {
    if (!action.affect) {
      return;
    }

    action.affect.forEach((affect) => {
      const affectingCharacter = this.state.characters.find((character) => {
        return character.id === affect.affectFrom;
      });
      const affectedCharacter = this.state.characters.find((character) => {
        return character.id === affect.affectTo;
      });

      if (affectedCharacter && affectingCharacter) {
        const currentRelationship =
          affectedCharacter.relationships[affectingCharacter.id];
        if (!currentRelationship) {
          return;
        }

        affectedCharacter.relationships[affectingCharacter.id] =
          currentRelationship + affect.value;
      }
    });
  }

  constructor(initialState: TextEngineState) {
    this.state.characters = initialState.characters;
    this.state.sequence = initialState.sequence;
  }
}
