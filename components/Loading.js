import { ClipLoader } from "react-spinners";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <ClipLoader color="blue" size={40} />
    </center>
  );
}

export default Loading;
