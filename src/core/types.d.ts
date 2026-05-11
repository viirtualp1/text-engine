export enum TextEngineSequenceStepType {
  DIALOG = "dialog",
  ACTION = "action",
}

export type TextEngineDialogStep = {
  type: TextEngineSequenceStepType.DIALOG;
  data: TextEngineSequenceStepDialog;
};

export type TextEngineActionStep = {
  type: TextEngineSequenceStepType.ACTION;
  data: TextEngineSequenceStepAction;
};

export type TextEngineSequenceStep =
  | TextEngineDialogStep
  | TextEngineActionStep;

export interface TextEngineSequenceStepDialog {
  title: string;
  text: string;
}

enum TextEngineSequenceActionType {
  QTE = "qte",
  CHOOSE_ONE = "choose_one",
}

export interface TextEngineSequenceActionAffect {
  character: string;
  value: number;
}

export interface TextEngineSequnceActionOption {
  text: string;
  affect?: TextEngineSequenceActionAffect[];
}

export interface TextEngineSequenceActionQte {
  type: TextEngineSequenceActionType.QTE;
  options: TextEngineSequnceActionOption[];
}

export interface TextEngineSequenceActionChooseOne {
  type: TextEngineSequenceActionType.CHOOSE_ONE;
  options: TextEngineSequnceActionOption[];
}

export interface TextEngineSequenceStepAction {
  label: string;
  actions: TextEngineSequenceActionQte | TextEngineSequenceActionChooseOne;
}
