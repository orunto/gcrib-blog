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
            <span>Fikayomi</span>
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
            <span>Fikayomi</span>
            <p>In this article, you will learn all the basics you need to build a wardrobe that will serve you well and greatly improve your style. Consider this as the foundation of your style journey.</p>
            <Button>Read More</Button>
        </div>
    )
}

function PostPhoto() {
    return(
        <div className="PostPhoto" id="skinheader"></div>
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
            <h1 id="sneak">HOW TO WEAR  A SUIT (6 SUIT RULES EVERY MAN MUST FOLLOW)</h1>
            <span id="sneakerspan">Fikayomi</span>
            <PostPhoto></PostPhoto>
            <p>A suit is as classy and as elegant as a man's attire can get. It is an attire that sends the message of power and competence if worn properly. We at gentlemen's crib believe that every man should own at least one suit and should have the knowledge on how to wear it properly. In this article, we will be giving you that knowledge, we will be sharing <b>6 rules every man must follow when wearing a suit.</b>
                <br></br>
                <br></br>
                <img src="./images/coat.png"/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h3>6 Rules every man must follow when wearing a suit</h3>
                <br></br>
                <br></br>
                This routine has a few uncomplicated steps so it's a very easy habit to pick up and you don't waste your time with a 70 step routine. Consider this as the foundation of your skin care on which you build and add steps as suited for you.



                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>1. Your Suit should fit properly </b>
                <br></br>
                <br></br>
                <img src="./images/suitfit.png" />
                <br></br>
                <br></br>
                Fit is the most important part of a suit. A well fitting cheap suit will always look better than an expensive designer suit that doesn't fit well. Here are a few pointers on how to nail the fit of your suit;
                <br></br>
                <br></br>
                <ul>
                    <li>The collar of your jacket should rest on the collar of your shirt without any gap.</li>
                    <li>The shoulder seam of the jacket should end exactly where your shoulder ends.</li>
                    <li>About a quarter to half an inch of your shirt cuff should be visible under your jacket sleeve.</li>
                    <li>For your jacket length, your suit jacket should be long enough to cover your buttocks and should stop around your knuckles.</li>
                    <li>Your trousers should sit on or slightly above your waist. It shouldn't be too tight or loose at the hip or thighs.</li>
                    <li>For most men a quarter break or no break is the right length for your trousers. Taller men can have a full break. (A break in your trousers is the fold of fabric at the bottom of your pants that rests on your shoes).</li>
                </ul>

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>2. Jacket Buttons</b>
                <br></br>
                <br></br>
                <img src="./images/suitbuttons.png" />
                <br></br>
                <br></br>
                If your jacket has a single button then obviously, that button should be fastened but in cases where you have a two-button or three-button jacket, <b>do not fasten the bottom button.</b> The top button on a three-button jacket is optional, you can choose to fasten it or not.
If you have a three-piece suit, the bottom button of your waistcoat should also be left undone.

                <br></br>
                <br></br>
                When sitted, you should unbutton your jacket to help it stay well on you and not damage the structure.
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>3. Remove Tags and Stitching</b>
                <br></br>
                <br></br>
                <img src="./images/suitstitch.png" />
                <br></br>
                <br></br>
                When you get a new suit you will usually find that the pockets and vents are stitched, you are supposed to cut the stitching from those vents and pockets.

                <br></br>
                <br></br>
                You will also find some tags and the brand label on the sleeve. While it may be tempting not to remove these things so that everyone can know what brand of suit you have on, you should remove them. It is a suit, not a jersey.
                
                <br></br>
                <br></br>
                (A vent is a slit that extends upwards from the the bottom at the backside of a suit jacket)

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>4. Match Your Leathers and Metals</b>
                <br></br>
                <br></br>
                <img src="./images/leather.png" />
                <br></br>
                <br></br>
                It's as simple as it sounds, the leather on your shoes match your belt and watch strap and the metal on your belt buckle should match your watch. This is to prevent clashes in your outfit. There may be some cases where this rule may not apply like if you are wearing white leather sneakers. It's mainly applicable if you're going for a classic menswear look with dress shoes and a dress watch.

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>5. Manage Your Accessories</b>
                <br></br>
                <br></br>
                <img src="./images/accessories.png" />
                <br></br>
                <br></br>
                When wearing a suit you should be thoughtful about your accessories. Don't wear sports watches like a G-Shock or smart watches. Stick to a minimal dress watch with a leather or metal strap. Keep other accessories as minimal as possible. You shouldn't try to wear all the suit accessories you can lay your hands on all at once. <b>Less is more.</b> A pocket square, a tie bar and your watch are good enough. You can add one ring if you have to. Not wearing a pocket square, lapel pin and a Boutonnière all at once.

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>6. Don't Stuff Your Pockets</b>
                <br></br>
                <br></br>
                Not all those extra pockets on your suit are supposed to be packed full. If possible, keep all the pockets on the outer part of your suit empty (except for your pocket square of course). You can put your phone and wallet in the pocket inside your suit jacket.
                <br></br>
                <br></br>
                That's all for now. By applying these rules you will greatly improve how you look in your suits. You should share this article with your friends to help them improve their suit game as well. You can get more fashion tips on our <a href="">Twitter</a> and <a href="">Instagram.</a>
            </p>
        </section>
    );
}


function Footer (){
    return(
        <footer id="skinfooter">
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