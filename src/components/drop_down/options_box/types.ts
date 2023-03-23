export type Props = {
  onChange: (value: string) => void;
  onSubmitting: () => void;
  isOpen: boolean;
  chosenValue: string | undefined;
  closeDropDown: () => void;
};
