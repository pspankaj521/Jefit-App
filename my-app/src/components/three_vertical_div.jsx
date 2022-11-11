import { Button } from "@chakra-ui/react";

function Three_Vertical() {
  return (
    <div
      style={{
        height: "auto",
        backgroundColor: "#f1f8e9",
        color: "#37474f",
        border: "1px solid white",
        margin: "auto",
      }}
    >
      <p
        style={{
          fontWeight: "bolder",
          fontFamily: "sans-serif",
          fontSize: "40px",
          wordSpacing: "1",
          marginTop: "120px",
        }}
      >
        JEFIT COVERS ALL OF YOUR WORKOUT NEEDS
      </p>
      <div
        style={{
          width: "90%",
          height: "auto",
          display: "flex",
          margin: "auto",
          marginTop: "60px",
        }}
      >
        <div style={{ width: "50%", marginTop:"80px" }}>
          <img
            style={{ width: "120%" }}
            src="https://www.jefit.com/wp/wp-content/uploads/2022/08/web1-1536x1536.png"
            alt=""
          />
        </div>
        <div style={{ width: "50%" ,marginTop:"140px" }}>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#26a69a",
              textAlign: "left",
              marginLeft: "30px",
            }}
          >
            WORKOUT TRACKING
          </p>
          <p
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              color: "#37474f",
              textAlign: "left",
              marginLeft: "30px",
              marginTop: "30px",
            }}
          >
            PERSONALIZE YOUR WORKOUT PLANS
          </p>
          <br />
          <p
            style={{
              display: "flex",
              fontSize: "25px",
              fontWeight: "bold",
              margin: "auto",
              marginLeft: "30px",
              textIndent: "20px",
            }}
          >
            <img
              style={{ width: "4%", height: "4%", marginTop: "10px" }}
              src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
              alt=""
            />{" "}
            1400+ exercises with instructions
          </p>
          <p
            style={{
              display: "flex",
              fontSize: "25px",
              fontWeight: "bold",
              margin: "auto",
              marginLeft: "30px",
              marginTop: "20px",
              textIndent: "20px",
            }}
          >
            <img
              style={{ width: "4%", height: "4%", marginTop: "10px" }}
              src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
              alt=""
            />
            Pro-designed workout plans
          </p>
          <p
            style={{
              display: "flex",
              fontSize: "25px",
              fontWeight: "bold",
              margin: "auto",
              marginLeft: "30px",
              marginTop: "20px",
              textIndent: "20px",
            }}
          >
            <img
              style={{ width: "4%", height: "4%", marginTop: "10px" }}
              src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
              alt=""
            />
            Support custom exercises
          </p>
          <p
            style={{
              display: "flex",
              fontSize: "25px",
              fontWeight: "bold",
              margin: "auto",
              marginLeft: "30px",
              marginTop: "20px",
              textIndent: "20px",
            }}
          >
            <img
              style={{ width: "4%", height: "4%", marginTop: "10px" }}
              src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
              alt=""
            />
            Flexible workout planning tool
          </p>
          {/* <button style={{backgroundColor:"#4dd0e1",color:"white", fontSize:"23px",fontWeight:"bolder",padding:"10px 50px", borderRadius:"50px", marginTop:"30px", marginRight:"290px", }}>JOIN NOW</button> */}

          <Button
            size="md"
            height="48px"
            width="250px"
            border="2px"
            color="white"
            backgroundColor="#4dd0e1"
            borderRadius="50px"
            fontSize="23px"
            marginRight="290px"
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

      {/* <=================================1st box end======================================================>      */}
      <div
        style={{
          width: "90%",
          height: "auto",
          display: "flex",
          margin: "auto",
          marginTop: "60px",
        }}
      >
        
        <div style={{ width: "50%",marginTop:"140px" }}>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#26a69a",
              textAlign: "left",
              marginLeft: "30px",
            }}
          >
            PROGRESS TRACKING
          </p>
          <p
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              color: "#37474f",
              textAlign: "left",
              marginLeft: "30px",
              marginTop: "30px",
            }}
          >
            VIEW PROGRESS & REACH NEW LIMITS
          </p>
          <br />
          <p
            style={{
              display: "flex",
              fontSize: "25px",
              fontWeight: "bold",
              margin: "auto",
              marginLeft: "30px",
              textIndent: "20px",
            }}
          >
            <img
              style={{ width: "4%", height: "4%", marginTop: "10px" }}
              src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
              alt=""
            />{" "}
            Track workout time and weightlifting
          </p>
          <p
            style={{
              display: "flex",
              fontSize: "25px",
              fontWeight: "bold",
              margin: "auto",
              marginLeft: "30px",
              marginTop: "20px",
              textIndent: "20px",
            }}
          >
            <img
              style={{ width: "4%", height: "4%", marginTop: "10px" }}
              src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
              alt=""
            />
            Set target muscles and body measurements
          </p>
          <p
            style={{
              display: "flex",
              fontSize: "25px",
              fontWeight: "bold",
              margin: "auto",
              marginLeft: "30px",
              marginTop: "20px",
              textIndent: "20px",
            }}
          >
            <img
              style={{ width: "4%", height: "4%", marginTop: "10px" }}
              src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
              alt=""
            />
            Understand muscle recovery rate
          </p>
          <p
            style={{
              display: "flex",
              fontSize: "25px",
              fontWeight: "bold",
              margin: "auto",
              marginLeft: "30px",
              marginTop: "20px",
              textIndent: "20px",
            }}
          >
            <img
              style={{ width: "4%", height: "4%", marginTop: "10px" }}
              src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
              alt=""
            />
            Set 1RM goals and refresh records
          </p>
          <Button
            size="md"
            height="48px"
            width="250px"
            border="2px"
            color="white"
            backgroundColor="#4dd0e1"
            borderRadius="50px"
            fontSize="23px"
            marginRight="290px"
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
        <div style={{ width: "50%",marginTop:"80px" }}>
          <img
            style={{ width: "120%" }}
            src="https://www.jefit.com/wp/wp-content/uploads/2022/08/web2-1536x1536.png"
            alt=""
          />
        </div>
      </div>
      {/* <===================================2ns box end====================================================>      */}
      <div
        style={{
          width: "90%",
          height: "auto",
          display: "flex",
          margin: "auto",
          marginTop: "60px",
        }}
      >
        <div style={{ width: "50%",marginTop:"80px" }}>
          <img
            style={{ width: "120%" }}
            src="https://www.jefit.com/wp/wp-content/uploads/2022/08/web3-1536x1536.png"
            alt=""
          />
        </div>
        <div style={{ width: "50%",marginTop:"140px" }}>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#26a69a",
              textAlign: "left",
              marginLeft: "30px",
            }}
          >
           SMART WATCH INTEGRATION
          </p>
          <p
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              color: "#37474f",
              textAlign: "left",
              marginLeft: "30px",
              marginTop: "30px",
            }}
          >
            TRAIN & LOG SEAMLESSLY IN GYM AND HOME
          </p>
          <br />
          <p
            style={{
              display: "flex",
              fontSize: "25px",
              fontWeight: "bold",
              margin: "auto",
              marginLeft: "30px",
              textIndent: "20px",
            }}
          >
            <img
              style={{ width: "4%", height: "4%", marginTop: "10px" }}
              src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
              alt=""
            />{" "}
            Log training with one-click
          </p>
          <p
            style={{
              display: "flex",
              fontSize: "25px",
              fontWeight: "bold",
              margin: "auto",
              marginLeft: "30px",
              marginTop: "20px",
              textIndent: "20px",
            }}
          >
            <img
              style={{ width: "4%", height: "4%", marginTop: "10px" }}
              src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
              alt=""
            />
            Control rest time easily
          </p>
          <p
            style={{
              display: "flex",
              fontSize: "25px",
              fontWeight: "bold",
              margin: "auto",
              marginLeft: "30px",
              marginTop: "20px",
              textIndent: "20px",
            }}
          >
            <img
              style={{ width: "4%", height: "4%", marginTop: "10px" }}
              src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
              alt=""
            />
           Available on mobile and watch
          </p>
          <p
            style={{
              display: "flex",
              fontSize: "25px",
              fontWeight: "bold",
              margin: "auto",
              marginLeft: "30px",
              marginTop: "20px",
              textIndent: "20px",
            }}
          >
            <img
              style={{ width: "4%", height: "4%", marginTop: "10px" }}
              src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png"
              alt=""
            />
            Audio and video instructions
          </p>
          <Button
            size="md"
            height="48px"
            width="250px"
            border="2px"
            color="white"
            backgroundColor="#4dd0e1"
            borderRadius="50px"
            fontSize="23px"
            marginRight="290px"
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
    </div>
  );
}
export default Three_Vertical;
