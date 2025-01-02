import { useContext } from "react";
import { ThemeProvider } from "../UseContext";
function StudentResults(){
    var result = useContext(ThemeProvider);

    return(
        <div>
            <h3> Your Sgpa Result is {result.sgpa} </h3>
            <h3> Your Cgpa Result is {result.cgpa} </h3>


        </div>
    )
}
export default StudentResults;