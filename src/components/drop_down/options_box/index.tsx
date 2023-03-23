import { useEffect, useRef } from "react";
import { useTheme } from "react-jss";
import { AppTheme } from "../../../utils/types/types";
import { useStyles } from "./style";
import { Check as CheckIcon } from "react-feather";
import { Events } from "../../../utils/functions/Events";
import { useTransition } from "../../../utils/hooks/use_transition";
import classNames from "classnames";
import { options } from "./mock_data";
import { Props } from "./types";
import { useStylesTheme } from "../../../utils/theme/use_styles_theme";

export function OptionsBox({
  onChange,
  onSubmit,
  isOpen,
  chosenValue,
  closeDropDown,
}: Props) {
  const theme = useTheme<AppTheme>();
  const classes = useStylesTheme(useStyles);
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
