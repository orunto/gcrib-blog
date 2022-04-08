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

function Posts1 (props) {
    return (
        <div className="Posts" id="Posts1">
            <PostPhoto></PostPhoto>
            <div className="PostInfo">
                <h3>Black Friday Sales - Scam or Not</h3>
                <span>Fikayomi Akindele</span>
                <p>Holiday season is here and that means sales season is here. A lot of stores, both online and physical will offer a lot of sales between now and January next year. But...</p>
                <Button>
                    <span>Read More</span>
                </Button>
            </div>
        </div>
    )
}

function Posts2 (props) {
    return (
        <div className="Posts" id="Posts2">
            <PostPhoto></PostPhoto>
            <div className="PostInfo">
                <h3>5 Amazing Casual Outfits for Gentlemen</h3>
                <span>Fikayomi Akindele</span>
                <p>Casual is what most people will call their style and it's also how most people will dress most of the time. Casual style is very comfortable and can easily be done. </p>
                <Button>
                    <span>Read More</span>
                </Button>
            </div>
        </div>
    )
}

function Posts3 (props) {
    return (
        <div className="Posts" id="Posts3">
            <PostPhoto></PostPhoto>
            <div className="PostInfo">
                <h3>How to clean your sneakers</h3>
                <span>Fikayomi Akindele</span>
                <p>Sneakers are a staple in any man's wardrobe and have continued to grow in popularity and demand in the last couple of years. I am pretty sure that you have a...</p>
                <Button>
                    <span>Read More</span>
                </Button>
            </div>
        </div>
    )
}

function Posts4 (props) {
    return (
        <div className="Posts" id="Posts4">
            <PostPhoto></PostPhoto>
            <div className="PostInfo">
                <h3>Building a versatile and stylish men's wardrobe</h3>
                <span>Fikayomi Akindele</span>
                <p>We all know the benefits of looking good. The complements, the opportunities, the respect. You want to start taking your dressing seriously but you don't know...</p>
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

function ReadOfTheDay() {
    return(
        <section className="ReadOfTheDay">
            <h1>Read of The Day</h1>
            <PostPhoto></PostPhoto>
            <h2>5 outfit mistakes you make</h2>
            <span id="author">Fikayomi Akindele</span>
            <p>You have finally decided to take your style seriously and make some improvements. You have started buying new clothes, maybe you are following some 
                Instagram or Pinterest pages for style/outfit inspiration. Now the clothes have arrived and you have started putting outfits together but you encounter 
                a problem, something seems off, the clothes don't look great on you. Well, today you'll learn why clothes may not look good on you, how to get past those
                 issues and look better in your clothes. </p>

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
                <Posts2></Posts2>
                <Posts3></Posts3>
                <Posts4></Posts4>
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
            <a href="#here"><span id="backtotop">Back to Top</span></a>
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