import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  optionsOutterContainer: {
    paddingRight: 3,
    position: "absolute",
    top: "calc(100% + 8px)",
    width: "100%",
    boxShadow: ({ theme }) => "0px 0px 2px " + theme.colors.gray.text,
    borderRadius: 10,
    maxHeight: 200,
    left: 0,
  },
  optionsContainer: {
    padding: "10px 2px 10px 10px",
    maxWidth: "100%",
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      width: 5,
      height: 1,
    },
    "&::-webkit-scrollbar-thumb": {
      background: ({ theme }) => "0px 0px 2px " + theme.colors.gray.thumb,
      borderRadius: "999em",
    },
  },
  option: {
    fontWeight: "normal",
    borderRadius: 8,
    color: ({ theme }) => theme.colors.gray.text,
    display: "flex",
    padding: "0 10px",
    alignItems: "center",
    justifyContent: "space-between",
    "&:hover": {
      color: ({ theme }) => theme.colors.primary.main,
      backgroundColor: ({ theme }) => theme.colors.primary.light,
      fontWeight: "bold",
    },
  },
  optionChosen: {
    color: ({ theme }) => theme.colors.primary.main,
    fontWeight: "bold",
  },

  optionText: {
    margin: 7,
  },
});
