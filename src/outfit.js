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
        <div className="PostPhoto" id="outfitheader"></div>
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
            <img src="https://cdn.jsdelivr.net/gh/orunto/mycdn/gcrib/images/Logo2.png" id="logo"></img>
            <img src="https://cdn.jsdelivr.net/gh/orunto/mycdn/gcrib/images/Icon2.png" id="logo2"></img>
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
            <h1>5 outfit mistakes you make</h1>
            <span>Fikayomi</span>
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
                <br></br>
                <br></br>
                Ever heard the saying "fit is king"? Well, it is. A two hundred naira suit that fits well will always look better than 
                a two million naira suit that doesn't fit you properly. Getting clothes is one thing but nailing the fit is another. 
                Clothes you buy off the rack (especially pants) will likely not fit you properly, fortunately, you have the option of 
                tailoring them to get the best fit. Tailoring your clothes might be very cheap or expensive depending on where you live 
                and what you want to adjust but the benefits are worth it.

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                Your shoes are not up to the standard of your clothes
                <br></br>
                <br></br>
                Your footwear is a very important part of your outfit. If your shoes don't go well with your outfit, then you won't 
                look your best. You don't have to break the bank if you don't have the money yet. You can start by taking care of the
                 ones you have and then save up for better. You should consider your closet when buying new shoes, think of how well 
                 the shoes will suit your lifestyle as well as your lifestyle. If you work in a corporate environment, a nice pair of
                  dress shoes will work well for you and if you are a student, sneakers might be your best option. Consider your 
                  lifestyle before you buy the shoes. While you're investing in your clothing don't forget your shoes.

                  <br></br>
                <br></br>
                <br></br>
                <br></br>

                You don't use accessories
                <br></br>
                <br></br>
                Think of accessories like the paint on a building. Your outfit may be basic but when you add accessories, it takes it to 
                the next level. Your outfit may be a four but when you slap on a watch, a necklace and maybe a few rings, your outfit 
                easily becomes an eight. The good thing about accessories is that there is something to suit everyone and every occasion. 
                The best place to start is a simple watch, then you can go into bracelets, rings and necklaces from there.

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                You are looking at the wrong inspiration
                <br></br>
                <br></br>
                Finally and possibly the most important is the source of your inspiration. Many people get outfit inspiration from 
                people that are different from them, It could be height, physic, complexion, occupation and more. Take for example if 
                you are a 5’7 doctor that wants to upgrade your style and you follow the style of a 6’ fashion model (without 
                knowledgeable alterations), his style may not work well for you. That doesn’t mean you can’t be inspired by people 
                different from you, it just means you should be mindful of these differences and adjust them to suit you properly. Check 
                out Gentlemen's Crib on Twitter, Instagram, Facebook and LinkedIn or WhatsApp for your source of inspiration


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