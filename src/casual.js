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
            <span>Fikayomi Akindele</span>
            <p>In this article, I'll share with you all you need to know concerning the care and maintenance of your sneakers to keep them looking good for a long time.</p>
            <Button>Read More</Button>
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
            <span>Fikayomi Akindele</span>
            <p>Could there be something more to it? Is it a scam. These and many more are the questions that shall be answered in this article.</p>
            <Button>Read More</Button>
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
            <span>Fikayomi Akindele</span>
            <p>In this article, you will learn all the basics you need to build a wardrobe that will serve you well and greatly improve your style. Consider this as the foundation of your style journey.</p>
            <Button>Read More</Button>
        </div>
    )
}


function PostPhoto() {
    return(
        <div className="PostPhoto" id="casualheader"></div>
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

function ReadBody() {
    return (
        <section className="ReadBody">
            <h1>5 Amazing Casual Outfits for Gentlemen</h1>
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
                Shorts, A Tee shirt and White Sneakers
                <br></br>
                <br></br>
                The first outfit you should try involves shorts. Slim well fitting shorts. To nail this look, fit is very very important. The shorts should sit about an inch or two above the knee (avoid cargo shorts). A solid coloured tee shirt or polo will work well for this look as well as simple sneakers like vans or Chuck Taylors. Accessories will elevate this outfit.
                <br></br>
                <br></br>
                This outfit is great for the beach, a picnic,

                <br></br>
                <br></br>
                <br></br>
                <br></br>

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

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                Outfit #3

                <br></br>
                <br></br>
                Hoodie and a brown overcoat
                <br></br>
                <br></br>
                You know I can't make a list of casual outfits without mentioning the hoodie. The hoodie is the MVP of casual clothing. The hoodie can be worn in a lot of ways you can check here for different ways to style the hoodie.

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                Outfit #4

                <br></br>
                <br></br>
                Polo shirt and dress pants
                <br></br>
                <br></br>
                This outfit is built with the polo shirt as its base. Polo shirts in simple colours are very versatile and are the dressier version of the tee shirt. The polo shirt can be matched with smart trousers, chino trousers or chino shorts. For your shoes, you should stick with dress shoes or simple sneakers.


                <br></br>
                <br></br>
                <br></br>
                <br></br>

                Outfit #5

                <br></br>
                <br></br>
                Business casual
                <br></br>
                <br></br>
                The final outfit is what a lot of people will call business casual. It's the type of outfit you wear when your boss invites you for a sunday dinner. This outfit is a dressed down version of the suit. Remove your tie, let loose a few buttons and you're good. If you want, you can swap your Oxford shirt for a tee shirt and your dress shoes for a pair of sneakers to add a smart casual twist.
                <br></br>
                <br></br>
                These five outfits give you more options to add to your style portfolio, and as you can see you don't need extremely branded or designer items to stand out with your style the proper basics can go a long way.
            </p>
        </section>
    );
}


function Footer (){
    return(
        <footer>
            <span id="crib"><img src="/images/copyright.svg"></img> Gentlemen's Crib</span>
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