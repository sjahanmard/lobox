import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  select: {
    position: "relative",
    display: "flex",
    flexGrow: 1,
    minWidth: 300,
    height: 35,
    borderRadius: 10,
    padding: "3px 8px",
    border: ({ theme }) => "1px solid " + theme.colors.primary.main,
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
    "&:focus": {
      boxShadow: ({ theme }) => "0px 0px 5px " + theme.colors.primary.main,
      border: "unset",
    },
  },
  selectText: {
    margin: 0,
    marginLeft: 5,
    color: ({ theme }) => theme.colors.gray.text,
    fontWeight: "bold",
  },
});
