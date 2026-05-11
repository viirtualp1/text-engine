import {
  type TextEngineSequenceStep,
  TextEngineSequenceStepType,
  TextEngineSequenceActionType,
} from "../types";

const sequence: TextEngineSequenceStep[] = [
  {
    type: TextEngineSequenceStepType.DIALOG,
    data: {
      title: "Clara",
      text: "Test",
    },
  },
  {
    type: TextEngineSequenceStepType.ACTION,
    data: {
      label: "Choose 1",
      actions: {
        type: TextEngineSequenceActionType.CHOOSE_ONE,
        options: [
          {
            text: "1",
            affect: [
              {
                character: "Igor",
                value: 1,
              },
            ],
          },
          { text: "2" },
          { text: "3" },
        ],
      },
    },
  },
];

console.log(sequence);
