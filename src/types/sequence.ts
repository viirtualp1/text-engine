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

export enum TextEngineSequenceActionType {
  QTE = "qte",
  CHOOSE_ONE = "choose_one",
}

export interface TextEngineSequenceActionDispatch {
  id: string;
  affect: TextEngineSequenceActionAffect[] | undefined;
}

export interface TextEngineSequenceActionAffect {
  character: string;
  value: number;
}

export interface TextEngineSequnceActionOption {
  id: string;
  text: string;
  affect?: TextEngineSequenceActionAffect[];
}

export interface TextEngineSequenceActionQte {
  id: string;
  type: TextEngineSequenceActionType.QTE;
  options: TextEngineSequnceActionOption[];
}

export interface TextEngineSequenceActionChooseOne {
  id: string;
  type: TextEngineSequenceActionType.CHOOSE_ONE;
  options: TextEngineSequnceActionOption[];
}

export interface TextEngineSequenceStepAction {
  label: string;
  action: TextEngineSequenceActionQte | TextEngineSequenceActionChooseOne;
}
