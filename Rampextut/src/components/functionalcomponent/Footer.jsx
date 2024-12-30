import '../../assets/css/footer.css'
function Footer() {
    function send(){
        window.alert("Sent")
    }
    
    return (
        <div className = "Foot">
            <footer>
                <form>
                    <h1>Keep in touch!</h1>
                    <label>Name:</label>

                    <input type="text" name="name" placeholder="Enter your name"></input><br></br>

                    <label>Email:</label>

                    <input type="email" name="name" placeholder="Enter your mailid"></input><br></br>
                    <label>Contact:</label>

                    <input type="number" name="name" placeholder="Enter your mobile number"></input><br></br>
                    <button onClick={send}>Send</button>

                </form>
            </footer>
        </div>
    );
} export default Footer;