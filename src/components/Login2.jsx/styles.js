import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    box: {
      display: "flex",
      justifyContent: "center",
      margin: "1rem",
    },
    form: {
      border: "1px solid lightgray",
      margin: "5px",
      borderRadius: 5,
      // width: "50vw",
      padding: "0px 5rem",
      boxShadow:
        "0rem 0.1rem 0.1rem 0.1rem linear-gradient(165deg, lightcyan, greenyellow)",
      backgroundImage: "linear-gradient(165deg, lightcyan, greenyellow)",
    },
    button: {
      // background: "linear-gradient(135deg, lightgray, greenyellow)",
      backround: "lightgray",
      padding: "0.25rem 2rem",
      width: "20vw",
    },
    mainForm: {
      display: "flex",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
    },
    outer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    formBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    divider: {
      width: "50vw",
      // height : "50px",
      padding: "0.5rem 0",
      paddingLeft: "25vw",
  
      // justifyContent : "center",
    },
    link: {
      textAlign: "center",
      textDecoration: "none",
      color: "black",
    },
    typography: {
      color: "greenyellow",
    },
  });

  export default useStyles;