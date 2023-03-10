export interface InputTypes {
  id: "amount";
  type: "number";
  min: "1";
  max: "5";
  step: "1";
  defaultValue: "1";
}

export interface InputPropTypes {
  label: string;
  input: InputTypes;
}
