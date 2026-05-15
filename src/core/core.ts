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

  dispatch(action: TextEngineSequenceActionDispatch) {
    if (action.affect) {
      action.affect.forEach((affect) => {
        const affectedCharacter = this.state.characters.find(
          (character) => character.id === affect.character,
        );

        console.log("affected: ", affectedCharacter);
        console.log("affect: ", affect);

        if (affectedCharacter) {
          const currentRelationship =
            affectedCharacter.relationships[affect.character];
          console.log("current relationship: ", currentRelationship);
          if (!currentRelationship) {
            return;
          }

          affectedCharacter.relationships[affect.character] =
            currentRelationship + affect.value;

          console.log("characters: ", this.state.characters);
        }
      });
    }
  }

  constructor(initialState: TextEngineState) {
    this.state.characters = initialState.characters;
    this.state.sequence = initialState.sequence;
  }
}
