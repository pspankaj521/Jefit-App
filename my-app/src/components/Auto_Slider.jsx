import { keyframes } from "@emotion/react";
import "../index.css";
import { Button } from "@chakra-ui/react";
// const styles = {
//   slider_boxes: {
//     display: "flex",
//     width: "calc(250px*20)",
//     animation: "scroll 40s linear infinite",
//   },

//   slides:{
//     height:"auto",
//     width:"auto",
//     display: "flex",
//     alignItems: "center",
//     padding: "20px",
//    perspective: "100%",
//    },

//    img:{
//     width:"100%",
//     transition: "transform 1s",
// },
// // @keyframes scroll :{
// //     0%{
// //         transfrom:"translateX(0)",
// //     }
// //     100%{
// //         transform: "translateX(calc(-250px*10))",
// //     }
// // }

// };

function Auto_slider() {
  return (
    <div
      style={{
        height: "600px",
      

        width: "100%",
      
      }}
    >
      <p style={{ fontSize: "40px", fontWeight: "bold" ,marginTop: "40px"}}>
        CONNECT WITH OVER 10 MILLION JEFIT MEMBERS
      </p>
      <p style={{ fontSize: "25px", fontWeight: "bold", marginTop: "40px" }}>
        As the most active workout community, we invite you and your friends to
        join us and support each other.
      </p>
      <div
        className="slider_boxes"
        style={{
          display: "flex",
         marginTop:"40px"
          //   animation-play-state: "paused"
        }}
      >
        <div className="slides" style={{ padding: "20px" }}>
          <img
            style={{ borderRadius: "5px" }}
            src="https://www.jefit.com/wp/wp-content/uploads/2021/11/4members-150x150.png.webp"
            alt=""
          />
        </div>
        <div className="slides" style={{ padding: "20px" }}>
          <img
            style={{ borderRadius: "5px" }}
            src="https://www.jefit.com/wp/wp-content/uploads/2021/11/3members-150x150.png.webp"
            alt=""
          />
        </div>
        <div className="slides" style={{ padding: "20px" }}>
          <img
            style={{ borderRadius: "5px" }}
            src="https://www.jefit.com/wp/wp-content/uploads/2021/11/10members-150x150.png.webp"
            alt=""
          />
        </div>
        <div className="slides" style={{ padding: "20px" }}>
          <img
            style={{ borderRadius: "5px" }}
            src="https://www.jefit.com/wp/wp-content/uploads/2021/11/6members-150x150.png.webp"
            alt=""
          />
        </div>
        <div className="slides" style={{ padding: "20px" }}>
          <img
            style={{ borderRadius: "5px" }}
            src="https://www.jefit.com/wp/wp-content/uploads/2021/11/1members-150x150.png.webp"
            alt=""
          />
        </div>
        <div className="slides" style={{ padding: "20px" }}>
          <img
            style={{ borderRadius: "5px" }}
            src="https://www.jefit.com/wp/wp-content/uploads/2021/11/13members-150x150.png.webp"
            alt=""
          />
        </div>
        <div
          className="slides"
          style={{ padding: "20px", marginRight: "30px" }}
        >
          <img
            style={{ borderRadius: "5px" }}
            src="https://www.jefit.com/wp/wp-content/uploads/2021/11/14members-150x150.png.webp"
            alt=""
          />
        </div>

        {/* <=========================================================================================> */}
        


        
      </div>
      <div style={{display:"flex", }}>
        <Button
            size="md"
            height="58px"
            width="300px"
            border="2px"
            color="white"
            backgroundColor="#4dd0e1"
            borderRadius="50px"
            fontSize="23px"
           
            marginLeft="400px"
            marginTop="30px"
            _hover={{
              backgroundColor: "white",
              color: "#4dd0e1",
              borderColor: "#4dd0e1",
            }}
          >
          TRENDING TOPICS
          </Button>
          <Button
            size="md"
            height="58px"
            width="250px"
            border="2px"
            color="white"
            backgroundColor="#4dd0e1"
            borderRadius="50px"
            fontSize="23px"
            marginLeft="50px"
            marginTop="30px"
            _hover={{
              backgroundColor: "white",
              color: "#4dd0e1",
              borderColor: "#4dd0e1",
            }}
          >
            JOIN NOW
          </Button>
        </div>
    </div>
  );
}

export default Auto_slider;
