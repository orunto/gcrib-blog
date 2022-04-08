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
            <span>Fikayomi Akindele</span>
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
                <span><a href="https://blog.gentlemenscrib.com">Visit Crib</a></span>
            </Button>
        </nav>
    );
}

function ReadBody() {
    return (
        <section className="ReadBody">
            <h1>How to clean your sneakers (The ultimate guide to sneaker care)</h1>
            <span>Fikayomi Akindele</span>
            <PostPhoto></PostPhoto>
            <p>Casual is what most people will call their style and it's also how most people will dress most of the time. Casual style is very comfortable and can easily be done. Unfortunately, casual is usually an excuse for some people not to put effort in their dress and end up dressing terribly. I am sure you have observed it as well, everyone wears the same low effort style and calls it casual.

                
                <br></br>
                <br></br>
                
                In this article, I'll be sharing with you, five casual outfits you should consider adding to your style portfolio today. 


                <br></br>
                <br></br>
                <br></br>
                <br></br>

                Outfit #1

                <br></br>
                <br></br>
                Shorts, A Tee shirt & White Sneakers
                <br></br>
                <br></br>
                The first outfit you should try involves shorts. Slim well fitting shorts. To nail this look, fit is very very important. The shorts should sit about an inch or two above the knee (avoid cargo shorts). A solid coloured tee shirt or polo will work well for this look as well as simple sneakers like vans or Chuck Taylors. Accessories will elevate this outfit.
                <br></br>
                <br></br>
                This outfit is great for the beach, a picnic,

                Outfit #2

                <br></br>
                <br></br>
                Long sleeve tee shirt with smart pants
                <br></br>
                <br></br>
                The first outfit you should try involves shorts. Slim well fitting shorts. To nail this look, fit is very very important. The shorts should sit about an inch or two above the knee (avoid cargo shorts). A solid coloured tee shirt or polo will work well for this look as well as simple sneakers like vans or Chuck Taylors. Accessories will elevate this outfit.
                <br></br>
                <br></br>
                This outfit is great for the beach, a picnic
            </p>
        </section>
    );
}


function Footer (){
    return(
        <footer>
            <span id="crib">Gentlemen's Crib</span>
            <a href="#here"><span id="backtotop">Back to Top</span></a>
            <span id="visit">Visit Crib</span>
        </footer>
    );
}



function Outfit (){
    return(
        <body>
            <Header />
            <ReadBody />
            <Footer />
        </body>
    );
}

ReactDOM.render(<Outfit />, document.getElementById("root"));