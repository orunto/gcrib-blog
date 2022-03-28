// Design Components
function Button (props) {
    return(
        <div className="Button"> {props.children} </div>
    );
}

function PostPhoto (props) {
    return(
        <div className="PostPhoto">{props.children}</div>
    );
}

function TalkButton (props) {
    return (
        <div className="TalkButton"></div>
    )
}


function DataForm (props) {
    return (
        <form id="DataForm">
            <input type="tel" id="tel" placeholder="000-000-000-0000"></input>
            <input id="submit" value="Phone Number" type="submit"></input>
        </form>
    )
}

// Interactions

function Drop () {
    navbar.style.height = "500px";
    menu1.style.display = "none";
}

function Retract () {
    navbar.style.height = "50px";
    menu1.style.display = "block";
}

// Sections
function Header (){
    return(
        <nav id="navbar">
            <a href="https://gentlemenscrib.com"><img id="desktop" src="../images/Logo T.png" alt="logo"/></a>
            <a href="https://gentlemenscrib.com"><img id="mobile" src="../images/Icon T.png" alt="logo" /></a>
            <img className="menu" id="menu1" onClick={Drop} src="../images/Menu.svg" alt="logo"/>
            <img className="menu" id="menu2" onClick={Retract} src="../images/Menu.svg" alt="logo"/>
            <ul>
                <li><a href="https://blog.gentlemenscrib.com">For You</a></li>
                <li>For Celebs</li>
                <li>For Companies</li>
                <li>Partners</li>
            </ul>

            <Button>
                <span>Visit Crib</span>
            </Button>
        </nav>
    );
}

function ReadOfTheDay() {
    return(
        <section className="ReadOfTheDay">
            <h1>Read of The Day</h1>
            <PostPhoto></PostPhoto>
            <h2>5 outfit mistakes you make</h2>
            <span id="author">Daniel Akindele</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet diam eu, vitae pretium morbi ut massa condimentum. 
                Nibh quis in nulla volutpat dui facilisi at sagittis, fringilla. Interdum ornare integer sit a est vitae ipsum. 
                Tempus dolor mi pharetra, amet parturient. At semper in tincidunt nullam odio iaculis. 
                Velit fringilla sed blandit semper viverra molestie aliquet at. Integer suspendisse pulvinar velit nunc vel cras vivamus. 
                Arcu enim cursus amet in consequat. Quis et lacus amet, dignissim velit urna, velit ultrices. </p>

            <Button>
                <span>Read More</span>
            </Button>
        </section>
    )
}

function OtherReads () {
    return (
        <section className="OtherReads">
            <h2>Other Reads for You</h2>
            
        </section>
    );
}

function Footer (){
    return(
        <footer>
            <span id="crib">Gentlemen's Crib</span>
            <a href="#navbar"><span id="backtotop">Back to Top</span></a>
            <span id="visit">Visit Crib</span>
        </footer>
    );
}

function Home (){
    return(
        <body>
            <Header/>
            <ReadOfTheDay />
            <OtherReads />
            <Footer />
        </body>
    );
}

ReactDOM.render(<Home />, document.getElementById("root"));