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

function ProgressBar (props) {
    return (
        <div id="ProgressBar">
            <div id="one"></div>
            <div id="two"></div>
            <div id="three"></div>
            <div id="four"></div>
        </div>
    )
}

function Posts (props) {
    return (
        <div className="Posts">
            <PostPhoto></PostPhoto>
            <div className="PostInfo">
            <h3>5 outfit mistakes you make</h3>
            <span>Daniel Akindele</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, turpis faucibus commodo proin quisque faucibus pharetra tempor aliquet.</p>
            <Button>
                <span>Read More</span>
            </Button>
            </div>
        </div>
    )
}

function Posts1 (props) {
    return (
        <div className="Posts" id="Posts1">
            <PostPhoto></PostPhoto>
            <div className="PostInfo">
                <h3>5 outfit mistakes you make</h3>
                <span>Daniel Akindele</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, turpis faucibus commodo proin quisque faucibus pharetra tempor aliquet.</p>
                <Button>
                    <span>Read More</span>
                </Button>
            </div>
        </div>
    )
}

// Interactions

function Drop () {
    navbar.style.height = "400px";
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
                <li>For You</li>
                <li>For Celebs</li>
                <li>For Companies</li>
                <li>Partners</li>
            </ul>

            <Button>
                <a id="foryou" href="https://blog.gentlemenscrib.com"><span>Visit Crib</span></a>
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

            <div className="ReadsPosts">
                <Posts></Posts>
                <Posts></Posts>
                <Posts></Posts>
                <Posts1></Posts1>
            </div>
            
            <ProgressBar></ProgressBar>
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