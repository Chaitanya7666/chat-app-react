import { makeStyles } from "@material-ui/core";

const  useStyles = makeStyles({
    list: {
        width: 360,
      },
      fullList: {
        width: 'auto',
      },
      sidebar: {
        flex: 3,
        // borderRight: "1px solid black",
        display : "flex",
        flexDirection : "column",
        // minWidth : "400px"
      },
      sidebar__header: {
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        alignItems: "center",
        backgroundColor: "rgb(235,235,235)",
        border: "1px solid black",
        maxWidth : "310px"
      },
      sidebar__header__icon: {
        marginRight: "2rem",
      },
      searchIcon: {
        margin: "auto 1rem",
        color: "darkgray",
        backgorundColor: "white",
        marginTop : "0.5rem"
        
    
      },
      sidebar_search: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        border: "1rem solid white",
        height : "1rem",
        backgroundColor : "white",
        borderRadius : "50px",
        maxWidth : "310px"
    
      },
      inputField: {
        width: "100%",
        border: "none",
        height : "2rem",
        "&:focus": {
           outlineWidth : "0rem"
          }
      },
      sidebar_searchicon_div : {
          backgroundColor : "white"
      },
      sidebar_search__container : {
          padding: "0.5rem",
          backgroundColor : "rgb(235,235,235)",
          display : "flex"
    
      },
      sidebar__chats:{
          overflow : "scroll", 
          flex : 1,
          overflowX : "hidden",
          '&::-webkit-scrollbar': {
            width: '0.4em'
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
          }
      },

})

export default useStyles;