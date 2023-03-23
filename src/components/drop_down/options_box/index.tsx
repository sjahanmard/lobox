import { useEffect, useRef } from "react";
import { useTheme } from "react-jss";
import { AppTheme } from "../../../utils/types";
import { useStyles } from "./style";
import { Check as CheckIcon } from "react-feather";
import { consts } from "../../../utils/consts";
import { Events } from "../../../utils/Events";
import { useTransition } from "../../../utils/use_transition";
import classNames from "classnames";
import { options } from "./mock_data";
import { Props } from "./types";

export function OptionsBox({
  onChange,
  onSubmit,
  isOpen,
  chosenValue,
  closeDropDown,
}: Props) {
  const theme = useTheme<AppTheme>();
  const classes = useStyles({ theme });
  const dropDownboxRef = useRef<HTMLDivElement>(null);

  const { item: _isOpen, styles: stylesIsOpen } = useTransition(isOpen, 200, {
    from: {
      height: 50,
    },
    to: {
      height: 200,
    },
  });

  useEffect(() => {
    if (!_isOpen) return;
    function handleClick(e: globalThis.MouseEvent) {
      if (!dropDownboxRef?.current) return;
      if (!Events.doesEventContainElement(dropDownboxRef?.current, e)) {
        closeDropDown();
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "Enter") return;
      onSubmit();
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [chosenValue, _isOpen]);

  return (
    <>
      {_isOpen && (
        <div className={classes.optionsOutterContainer}>
          <div
            className={classes.optionsContainer}
            id={consts.ids["dropdown-select-courses"]}
            ref={dropDownboxRef}
            style={stylesIsOpen}
          >
            {options.map((item, index) => {
              const isChosen = chosenValue === item;
              return (
                <div
                  key={item + index}
                  className={classes.option}
                  onClick={() => {
                    onChange(item);
                  }}
                >
                  <p
                    className={classNames(classes.optionText, {
                      [classes.optionChosen]: isChosen,
                    })}
                  >
                    {item}
                  </p>
                  {isChosen && <CheckIcon color={theme.colors.primary.main} />}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
