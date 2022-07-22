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
        <div className="PostPhoto" id="accessoriesheader"></div>
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
            <h1 id="sneak">9 Accessories Every Man Should Have</h1>
            <span id="sneakerspan">Stephen</span>
            <PostPhoto></PostPhoto>
            <p>There are certain accessories every man should have no matter how old or young he is and regardless of his occupation and lifestyle. Some of these accessories might be used as scarcely as once in three months, however, when the need to use them arrives, he will not need to worry and will only need to slide into them.
                <br></br>
                <br></br>
                <b>Below are accessories every man should have in his possession.</b>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <b>1. Cufflinks</b>
                <br></br>
                <br></br>
                Cufflinks are one of the classiest accessories you should own. 
                <br></br>
                <br></br>
                <img src="./images/cufflinks.png" />
                <br></br>
                <br></br>
                A pair of cufflinks can transform your casual dressing into a professional one, and also leave the statement on everyone you cross paths with that you groom yourself down to the littlest details. Cufflinks also add to your gentleman's aura and can be worn on a date to get your lady melting. These cuffs come in different styles. They could be silver-plated, gold-coloured, glittery or conservative. Going for one you're comfortable in is very important as it will either boost or mar your level of confidence. Cufflinks are used on both plain and striped shirts as well as tailored suits which you should grab a hold of if you don't already own.
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>2. A wristwatch</b>
                <br></br>
                <br></br>
                A wristwatch is an essential accessory you must own as a man. This timepiece works beyond letting you know the time of the day. It is also a fashion statement that gives off the vibe that you are mature, accountable, confident and respect the importance of (your) time.  Wristwatches can be either leather or metal and come in different colours and styles. Rather than having multiple cheap ones, invest in a classy watch worthy of being around your wrist. 

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>3. Belt</b>
                <br></br>
                <br></br>
                Another accessory the modern man must own are belts. There are belts which fit casual dressings and situations such as strolling in a park and paying a visit to your friend(s). These belts tend to be either multicoloured or brightly coloured. There are also professional belts which more often than not, are conservative in colour such as different shades of brown, and black. They go well with suits, and tuxedos and should be worn during meetings, dinner dates and so on. Every gentleman should possess at least two casual and business belts of great quality to smoothen his fashion experience.

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>4. A wallet</b>
                <br></br>
                <br></br>
                A gentleman should own a wallet of high quality preferably of a neutral colour because they match the colour of roughly all outfits. Wallets are a way of expressing your fashion taste as well as keeping your personal belongings such as money and documents safe and organised. If your wallet has lost its shape or/and aesthetics, you should change it as this accessory can have a lasting impact on people's perception of you.

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>5. Sunglasses</b>
                <br></br>
                <br></br>
                Although sunglasses are great for protecting your eyes from excess (sun) light, they also add a touch of mystery to your persona and make whoever you engage curious. 
                <br></br>
                <br></br>
                <img src="./images/sunglasses.png" />
                <br></br>
                <br></br>
                They also conceal imperfections and make your face appear more symmetrical which means that an average individual will find you more physically attractive with sunglasses on than not. They can also affect how you behave, making you more calm, cool and masculine. However, there are many scenes where putting one on will be uncalled for such as wearing one all through a date, during a business meeting or hours after the sun sets.

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>6. Perfume</b>
                <br></br>
                <br></br>
                A nice perfume perks up your level of attractiveness and presents you as a sharp man who has his things put together.   They make you feel fresher, go well with all other accessories and transform impressions people have of you into long-lasting memories. Perfumes also boost your confidence, increase your sex appeal and make you come across as a well-groomed professional in your place of work. When choosing a fragrance to adopt as yours, it is advised that you go for lighter scents with long-lasting effects because this increases how personal it becomes. 

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>7. Jewellery</b>
                <br></br>
                <br></br>
                When it comes to pieces of jewellery, you do not have to think about it. A small ring on a finger of your choice, a bracelet around either or both wrists or/and necklaces communicate your style or sentimental symbols to everyone that needs to know. 
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>8. Ties</b>
                <br></br>
                <br></br>
                Ties have always been a symbol of honour and nobility, hence, it'll do you more good than not to adopt the style of wearing one, especially as a part of your professional outfit. Ties also signify capability which although you might be unaware of, tells those you engage with that you are confident of your abilities to execute that which is expected of you flawlessly. If you are considering beginning your necktie collection but you are unsure on the colours to start with, solid black and navy ties cannot harm your dress. 

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>9. Suspenders</b>
                <br></br>
                <br></br>
                Although suspenders are gradually becoming outdated since the introduction of belt to hold your trousers/shorts to your waist, its rareness has made it identified with formalities. However, they can be used casually, for humour and to stand out.
                <br></br>
                <br></br>
                <img src="./images/suspenders.png" />
                <br></br>
                <br></br>
                All these accessories are ones every man is expected to have. If however, you find yourself uncomfortable with using a few of these accessories, don't. Of all accessories, your originality is the greatest of all.
            </p>
        </section>
    );
}


function Footer (){
    return(
        <footer id="accessoriesfooter">
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