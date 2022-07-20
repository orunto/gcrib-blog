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
            <h1 id="sneak">SKIN CARE TIPS FOR MEN (BEST SKINCARE ROUTINE FOR MEN).</h1>
            <span id="sneakerspan">Fikayomi</span>
            <PostPhoto></PostPhoto>
            <p>Your face is your money maker. It is the first place people often look at and start forming an impression about you. It is an important and often forgotten part of your appearance. Think about this, you are in a new place and you don't know your way around. I am sure that you look around at people and use their faces/ appearances to determine who you would be asking for directions.
                
                <br></br>
                <br></br>
                
                Now, while not all of us have been blessed with fantastic genes, there are many things that we can do to maximize the potential we have. In this article I'll be sharing with you a very simple skincare routine as well as some tips that will help you to improve and maintain great skin.



                <br></br>
                <br></br>

                Disclaimer: Everything in this article is based on research and experience. Do not consider this as professional advice but as a guide. Consider it your responsibility to tailor it to suit you. This article is not to replace professional consultation as some cases may require.


                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h3>Simple Skincare Routine For Men</h3>
                <br></br>
                <br></br>
                This routine has a few uncomplicated steps so it's a very easy habit to pick up and you don't waste your time with a 70 step routine. Consider this as the foundation of your skin care on which you build and add steps as suited for you.



                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>Wash Your Face Twice Daily</b>
                <br></br>
                <br></br>
                <img src="./images/wash.png" />
                <br></br>
                <br></br>
                I will assume that you wash your face every morning at the start of your day and now I want you to start washing your face before bed too. Invest in good quality face wash. Avoid washing your face with a bar of soap because they are usually too harsh and dry up the skin.
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>Moisturize </b>
                <br></br>
                <br></br>
                <img src="./images/moisturize.png" />
                <br></br>
                <br></br>
                After washing your face, show your skin some love by moisturising. For the mornings, you are advised to use a moisturizer with SPF (Sun Protection Factor) which will protect your skin from the harmful effects of the sun as you go about your day. Take note of some moisturizers that have SPF but also bleach the skin (avoid them).
                <br></br>
                <br></br>
                After you wash your face at night apply a moisturizer that will nourish your skin as you sleep. You don't need SPF in your night moisturizer.
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>Exfoliate </b>
                <br></br>
                <br></br>
                Exfoliating removes dead skin cells on the surface and allows new skin to come to the surface. It removes dead and dull skin and leaves room for brighter healthy skin. You should exfoliate about once or twice weekly.
                <br></br>
                <br></br>
                There are different methods of exfoliating, like the use of exfoliating sponges, brushes or scrubs. You should find the one that suits you best.
                <br></br>
                <br></br>
                Like I mentioned earlier, these simple tips are the foundation. Depending on your consideration or lifestyle you can add things like eye creams, anti-aging cream etc.
                
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h3>Skin Care Tips</h3>
                <br></br>
                <br></br>
                Together with the simple routine, I will be sharing some tips that will also improve your skin and help keep your skin healthy.



                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>Stop Touching Your Face</b>
                <br></br>
                <br></br>
                <img src="./images/touch.png" />
                <br></br>
                <br></br>
                You go through your day touching different surfaces picking up different germs and dirt, you put those dirty hands on your face and now transfer all that dirt and grime onto your face. You are using your own hands to damage your skin (sort of). If you know you can't help touching your face, at least try to keep your hands clean.
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>Drink Water </b>
                <br></br>
                <br></br>
                <img src="./images/drink.png" />
                <br></br>
                <br></br>
                Just drink water, the benefits are endless, not only will your skin benefit but your entire body. In fact, I want you to drink some now, yes right now.
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>Clean/Change Your Pillowcase And Towel</b>
                <br></br>
                <br></br>
                <img src="./images/pillowcase.png" />
                <br></br>
                <br></br>
                Your face is buried in your pillow for 6 to 8 hours every night. It only makes sense to keep that surface clean. It's advisable to change or clean your pillowcases weekly and your towel once every two weeks.
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>Take Vitamin C</b>
                <br></br>
                <br></br>
                <img src="./images/vitaminc.png" />
                <br></br>
                <br></br>
                Let's see some of the benefits of vitamin C on your skin. It helps smooth wrinkles, it boosts collagen, it promotes healing, it sometimes helps with dark spots too.
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <b>Have A Grooming Routine</b>
                <br></br>
                <br></br>
                This one may not directly affect your skin but it's part of leveling up your face. If your skin care is on point you'll be holding yourself back if your grooming is not on point as well. Start from getting a haircut and managing your facial hair.
                <br></br>
                <br></br>
                Now you have the knowledge you need to begin to improve your skin and your appearance in general. Be consistent with these things and have some patience and you will see results. 
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