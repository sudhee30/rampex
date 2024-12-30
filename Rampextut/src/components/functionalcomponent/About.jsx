
function About(props){
    return(
        <section>
            <div><h1>This is About page</h1>
            <h1 style = {{textAlign:"center"}}>Learning props</h1>

            <h2>I am in {props.college} college</h2>
            <h3>Other Colleges are {props.clg},{props.clg1}</h3></div>
            
        </section>
    )



}
export default About;