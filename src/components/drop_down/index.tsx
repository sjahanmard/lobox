import { useCallback, useState } from "react";
import { useTheme } from "react-jss";
import { AppTheme } from "../../utils/types";
import { useStyles } from "./style";
import { OptionsBox } from "./options_box";
import { Events } from "../../utils/Events";
import {
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
} from "react-feather";

export function DropDown() {
  const [submittedValue, setSubmittedValue] = useState<string>("");
  const [chosenValue, setChosenValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const theme = useTheme<AppTheme>();
  const classes = useStyles({ theme });

  const onChange = useCallback(
    (chosenOption: typeof chosenValue) => {
      setChosenValue(chosenOption);
    },
    [setChosenValue]
  );

  const onSubmit = useCallback(() => {
    setIsOpen(true);
  }, [setSubmittedValue, chosenValue]);

  const openDropDown = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const closeDropDown = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <div
      className={classes.select}
      tabIndex={0}
      onClick={Events.stopPropagation}
      onFocus={openDropDown}
      onBlur={closeDropDown}
    >
      <p className={classes.selectText}>{submittedValue}</p>
      <OptionsBox
        onChange={onChange}
        onSubmitting={onSubmit}
        isOpen={isOpen}
        closeDropDown={closeDropDown}
        chosenValue={chosenValue}
      />
      {isOpen ? (
        <ChevronUpIcon color={theme.colors.gray.icons} />
      ) : (
        <ChevronDownIcon color={theme.colors.gray.icons} />
      )}
    </div>
  );
}