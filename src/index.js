// Design Components
function Button (props) {
    return(
        <div className="Button"> 
            {props.children} 
            <img src="/images/Mouse.svg"></img>
        </div>
    );
}

function ArticleCard1 (props) {
    return(
        <div className="ArticleCard" id="art1">
            {props.children}
            <div className="ArticleImg"></div>
            <h3>How to clean your sneakers
            <br></br>
            The ultimate guide to sneaker care</h3>
            <span>Fikayomi</span>
            <p>In this article, I'll share with you all you need to know concerning the care and maintenance of your sneakers to keep them looking good for a long time.</p>
            <a href="sneakers"><Button>Read More</Button></a>
        </div>
    )
}

function ArticleCard2 (props) {
    return(
        <div className="ArticleCard" id="art2">
            {props.children}
            <div className="ArticleImg"></div>
            <h3>Black Friday Sales
                <br></br>
            Scam or Not?</h3>
            <span>Fikayomi</span>
            <p>Could there be something more to it? Is it a scam. These and many more are the questions that shall be answered in this article.</p>
            <a href="friday"><Button>Read More</Button></a>
        </div>
    )
}

function ArticleCard3 (props) {
    return(
        <div className="ArticleCard" id="art3">
            {props.children}
            <div className="ArticleImg"></div>
            <h3>Building a versatile and stylish men's wardrobe
            <br></br>
            Men's style essentials</h3>
            <span>Fikayomi</span>
            <p>In this article, you will learn all the basics you need to build a wardrobe that will serve you well and greatly improve your style. Consider this as the foundation of your style journey.</p>
            <a href="veratile"><Button>Read More</Button></a>
        </div>
    )
}
// Interactions

function Drop () {
    dropdown.style.top = "0px";
    menu.style.display = "none";
    menu2.style.display = "block";
}

function Retract () {
    dropdown.style.top = "-600px";
    menu2.style.display = "none";
    menu.style.display = "block";
}


function MobileDrop () {
    dropdown.style.top = "0px";
    mobilemenu.style.display = "none";
    mobilemenu2.style.display = "block";
}

function MobileRetract () {
    dropdown.style.top = "-600px";
    mobilemenu2.style.display = "none";
    mobilemenu.style.display = "block";
}


function ShowPartners () {
    const button = document.querySelector(".Button");
    creators.style.display = "block";
    store.style.display = "block";
    stylists.style.display = "block";
    setTimeout(
        function() {
            creators.style.opacity = "1";
            store.style.opacity = "1";
            stylists.style.opacity = "1";
        }
    , 300);
    partners.style.display = "none";
    partners2.style.display = "block";
    button.style.top = "515px";
}

function HidePartners () {
    const button = document.querySelector(".Button");
    setTimeout(
        function() {
            creators.style.opacity = "0";
            store.style.opacity = "0";
            stylists.style.opacity = "0";
        }
    , 300);
    creators.style.display = "none";
    store.style.display = "none";
    stylists.style.display = "none";
    partners2.style.display = "none";
    partners.style.display = "block";
    button.style.top = "380px";
}



// Sections
function Header (){
    return(
        <nav id="navbar">
            <img src="https://cdn.jsdelivr.net/gh/orunto/mycdn/gcrib/images/Logo.png" id="logo"></img>
            <img src="https://cdn.jsdelivr.net/gh/orunto/mycdn/gcrib/images/Icon.png" id="logo2"></img>
            <span onClick={Drop} className="menu" id="menu">Menu<img src="/images/Menu.svg"></img></span>
            <span onClick={Retract} className="menu" id="menu2">Menu<img src="/images/cancel.svg"></img></span>
            <span id="search">Search<img src="/images/search.svg"></img></span>

            <img onClick={MobileDrop} className="mobilemenu" id="mobilemenu" src="/images/Menu.svg"></img>
            <img onClick={MobileRetract} className="mobilemenu" id="mobilemenu2" src="/images/cancel.svg"></img>
            <img id="mobilesearch" src="/images/search.svg"></img>
            <div id="dropdown">
                <ul>
                   <li> <a href="#">Home</a> </li>
                   <li> <a href="#">For You</a> </li>
                   <li> <a href="#">For You +</a> </li>
                   <li id="partners" onClick={ShowPartners}> <a href="#">Partners <img src="/images/partner.svg"></img></a> </li>
                   <li id="partners2" onClick={HidePartners}> <a href="#">Partners <img src="/images/partner.svg"></img></a> </li>
                   <li className="partneritem" id="creators"> <a href="#">Creators</a> </li>
                   <li className="partneritem" id="store"> <a href="#">Stores</a> </li>
                   <li className="partneritem" id="stylists"> <a href="#">Stylists</a> </li>
                   <li> <a href="#">For Companies</a> </li>
                </ul>

                <a href="#" id="dropbutton"><Button>Visit Crib</Button></a>
            </div>
        </nav>
    );
}


function ReadoftheDay (){
    return(
        <section className="ReadoftheDay">
            <span>Read of the Day</span>
            <h2>Skin Care Tips For Men (Best Skincare Routine For Men).</h2>
            <p>Now, while not all of us have been blessed with fantastic genes, there are many things that we can do to maximize the potential we have. In this article I'll be sharing with you a very simple skincare routine as well as some tips that will help you to improve and maintain great skin.</p>
            <a href="skin"><Button>Read More</Button></a>
        </section>
    )
}

function Yesterday (){
    return(
        <section className="Yesterday">
            <span>Yesterday</span>
            <h3>5 Outfit Mistakes You Make</h3>
            <a href="casual"><Button>Explore</Button></a>
        </section>
    )
}

function MoreReads (){
    return(
        <section className="MoreReads">
            <h2>More Reads for You</h2>
            <ArticleCard1 />
            <ArticleCard2 />
            <ArticleCard3 />
        </section>
    )
}

function Footer (){
    return(
        <footer>
            <span id="crib"><img src="/images/copyright.svg"></img> Gentlemen's Crib</span>
            <a href="#menu"><span id="backtotop">Back to Top</span></a>
            <span id="visit">Visit Crib</span>
        </footer>
    );
}



function Home (){
    return(
        <body>
            <Header/>
            <ReadoftheDay />
            <Yesterday />
            <MoreReads />
            <Footer />
        </body>
    );
}

ReactDOM.render(<Home />, document.getElementById("root"));

