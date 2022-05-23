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
        <div className="PostPhoto" id="sneakersheader"></div>
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
            <h1>How to clean your sneakers (The ultimate guide to sneaker care)</h1>
            <span id="sneakerspan">Fikayomi Akindele</span>
            <PostPhoto></PostPhoto>
            <p>Sneakers are a staple in any man's wardrobe and have continued to grow in popularity and demand in the last couple of years. I am pretty sure that you have a pair or more, and similar to any other piece in your wardrobe, maintenance and care play a large role in how long your sneakers will last.
                
                <br></br>
                <br></br>
                
                In this article, I'll share with you all you need to know concerning the care and maintenance of your sneakers to keep them looking good for a long time.


                <br></br>
                <br></br>
                <br></br>
                <br></br>

                How to clean your sneakers

                <br></br>
                <br></br>
                I will be breaking down this article into different parts of the shoes as well as different materials. This will help you use the most effective method for each part of the shoe.


                <br></br>
                <br></br>
                <br></br>
                <br></br>

                Let's get into it. 

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                Laces
                <br></br>
                <br></br>
                Laces of sneakers are usually made of fabric and to clean these laces, you should remove them from the shoe and soak them in a mild detergent and water solution. Wash gently to remove stains and rinse off in clean water and hang to dry. 
                <br></br>
                Sometimes, sneaker laces are leather. In this case you just need to wipe down the laces with a damp rag.


                  <br></br>
                <br></br>
                <br></br>
                <br></br>

                Insoles
                <br></br>
                <br></br>
                Remove the insole if it's possible, then remove loose dirt with a soft bristles brush. If the insoles are very dirty, wipe with a rag dipped in soapywater. Remove soapy residue by wiping with a clean wet rag. Air-dry, allow to dry completely before returning them to the shoe.


                <br></br>
                <br></br>
                <br></br>
                <br></br>

                Soles
                <br></br>
                <br></br>
                Sneakers usually have rubber soles and the most common colour is white. This means that it will get dirty very easily.
                <br></br>
                First you should wipe down the sole with a dry rag to get rid of the loose dirt. Use a soft brush (or old toothbrush) and mild detergent solution to gently clean the dirty places. Wipe over with a damp rag.

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                Body
                <br></br>
                <br></br>
                The body of sneakers come in different materials and each material requires a different method of cleaning. I will go over the different materials and how to clean them.

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                Leather
                <br></br>
                <br></br>
                Gently clean the shoe with a rag and mild detergent solution, allow it to dry and then treat with polish. Do not submerge the shoe in water or use a hard brush to clean.
                <br></br>
                You can also use a sneaker cleaning kit like the one from sneaklin

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                Nubuck/Suede
                <br></br>
                <br></br>
                Avoid wearing the suede shoes in wet or muddy areas. Use a soft brush after each use to get rid of the loose dirt. Spray the shoe with suede spray from time to time (apply as instructed). Use an eraser to remove scuff marks from the sneaker. Remove oil stains with baby powder, let it sit for at least an hour (repeat as needed).

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                Canvas/Knit
                <br></br>
                <br></br>
                Use a clean rag and mild detergent solution to scrub the shoe. You should repeat this process as necessary. After that, you should wipe the shoe with a clean damp to get rid of the soapy residue. Allow to completely dry.

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                Bonus Sneaker Care Tips
                <br></br>
                <br></br>
                After each wear you wipe the shoe with a rag before you store it. If dirt is left on the shoe, overtime it will ruin the material.
When the shoe is not in use, you should put a shoe tree in it. Shoe trees come in different materials like wood or plastic. Wooden shoe trees also have the benefit of getting rid of smell. 
                <br></br>
                If you don't have a shoe tree, you can squeeze old newspapers into the shoe. The purpose of this is to prevent the shoe from creasing, especially at the toe area.
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                Do not leave old socks in your shoes when you take them off. Leaving them in will make your shoes smell.
You can place a teabag in each shoe after wearing to get rid of odour.
As you should know, your shoes should be stored in a cool and dry place away from moisture.

<br></br>
                <br></br>
                <br></br>
                <br></br>
                With all this information, you have all you need to take care of your sneakers and keep them looking good for a long time. You can share this with people who will find it useful. Let us know your thoughts in the comments
            </p>
        </section>
    );
}


function Footer (){
    return(
        <footer id="sneakersfooter">
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