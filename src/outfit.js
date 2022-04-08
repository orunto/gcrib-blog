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
            <h1>5 outfit mistakes you make</h1>
            <span>Fikayomi Akindele</span>
            <PostPhoto></PostPhoto>
            <p>You have finally decided to take your style seriously and make some improvements. You have started buying new clothes, maybe 
                you are following some Instagram or Pinterest pages for style/outfit inspiration. 
                
                <br></br>
                <br></br>
                
                Now the clothes have arrived and you have started putting outfits together but you encounter a problem, something seems 
                off, the clothes don't look great on you. Well, today you'll learn why clothes may not look good on you, how to get past 
                those issues and look better in your clothes.

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                The clothes don't fit properly
                Ever heard the saying "fit is king"? Well, it is. A two hundred naira suit that fits well will always look better than 
                a two million naira suit that doesn't fit you properly. Getting clothes is one thing but nailing the fit is another. 
                Clothes you buy off the rack (especially pants) will likely not fit you properly, fortunately, you have the option of 
                tailoring them to get the best fit. Tailoring your clothes might be very cheap or expensive depending on where you live 
                and what you want to adjust but the benefits are worth it.

            </p>
        </section>
    );
}







function Outfit (){
    return(
        <body>
            <Header />
            <ReadBody />
        </body>
    );
}

ReactDOM.render(<Outfit />, document.getElementById("root"));