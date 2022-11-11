function BlueBox() {
  return (
    <div
      style={{
        backgroundColor: "#003c8f",
        height: "800px",
        width: "100%",
        display: "flex",
        color: "white",
      }}
    >
      <div style={{ width: "55%", color: "white" }}>
        <p
          style={{
            width: "88%",
            marginTop: "100px",
            fontWeight: "bold",
            fontSize: "60px",
            textAlign: "left",
            marginLeft: "50px",
            lineHeight: "130%",
          }}
        >
          MANAGE & TRACK ALL YOUR WORKOUTS IN ONE PLACE
        </p>
        <p
          style={{
            width: "95%",
            marginTop: "50px",
            fontWeight: "bold",
            fontSize: "33px",
            textAlign: "left",
            marginLeft: "50px",
            lineHeight: "130%",
            fontFamily: "Segoe Print",
          }}
        >
          #1 Popular Workout Tracking Platform Stay Strong Together
        </p>
        <div style={{ width: "85%", color: "white", display: "flex",margin:"auto" }}>
          <div style={{ width: "50%", color: "white" }}>
            <img style={{marginTop:"30px" }}src="https://www.jefit.com/wp/wp-content/uploads/2021/11/googleplay.png.webp" alt="" />
            <img style={{marginTop:"30px" }} src="https://www.jefit.com/wp/wp-content/uploads/2021/11/appstore.png.webp" alt="" />
          </div>
          <div style={{ width: "50%", color: "white" }}>
            <img style={{marginTop:"30px" }} src="https://www.jefit.com/wp/wp-content/uploads/2021/11/qrcode_white.png.webp" alt="" />
          </div>
          
        </div>
        <div style={{display:"flex", width:"50%", marginLeft:"60px", marginTop:"30px"}}>
            <img style={{width:"30px" }} src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png" alt="" />
            <img style={{width:"30px", marginLeft:"30px" }} src="https://cdn-icons-png.flaticon.com/128/2504/2504903.png" alt="" />
            <img style={{width:"30px", marginLeft:"30px"}} src="https://cdn-icons-png.flaticon.com/128/3256/3256013.png" alt="" />
          </div>
      </div>
      <div style={{ width: "45%"  }}>
        <img
          style={{ width: "130%", marginTop: "120px" }}
          src="https://www.jefit.com/wp/wp-content/uploads/2022/03/website_hero_watch-1536x1280.webp"
          alt="img"
        />
      </div>
    </div>
  );
}
export default BlueBox;
