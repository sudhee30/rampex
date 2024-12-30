import "../../assets/css/home.css"
function home() {
    var styling = {
        color: "#526E48",
        textDecoration: "underline",
        fontSize: "30px",
        textAlign : "top"
    }
    return (
        <div>
            <h1 style={styling}  >This is Home</h1>
            <h2 id = "idSeg" >Testing Styling</h2>
            <p className="box-model">Hello</p>
        </div>
    )

}
export default home;