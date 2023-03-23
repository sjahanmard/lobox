export type Props = {
  onChange: (value: string) => void;
  onSubmit: () => void;
  isOpen: boolean;
  chosenValue: string | undefined;
  closeDropDown: () => void;
};
