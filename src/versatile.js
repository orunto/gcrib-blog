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
        <div className="PostPhoto" id="versatileheader"></div>
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
            <h1>Building a versatile and stylish men's wardrobe (Men's style essentials).</h1>
            <span id="versatilespan">Fikayomi</span>
            <PostPhoto></PostPhoto>
            <p>We all know the benefits of looking good. The complements, the opportunities, the respect. You want to start taking your dressing seriously but you don't know where to start, you don't know what tools you need. In this article, you will learn all the basics you need to build a wardrobe that will serve you well and greatly improve your style. Consider this as the foundation of your style journey.

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                Building a versatile and stylish men's wardrobe


                <br></br>
                <br></br>
                Now before we get into the basics, I'll like to clear up some misinformation and give a few tips.
                <br></br>
                <br></br>
                First, you should understand that building a wardrobe doesn't have to make a hole in your budget. You don't always have to go for expensive things, there are always affordable alternatives. You can also check pre owned clothes. A lot of high quality items are usually available for a fraction of the retail price.

                <br></br>

                Quality over quantity. Quality doesn't necessarily mean expensive. Generally speaking, good quality items may cost more than cheap items but will last longer, age better and need to be replaced less frequently. This will save you money in the long run.

                <br></br>

                Consider your lifestyle. Building a wardrobe will vary from person to person. We all lead different lives and live in different places. Put all these factors like your occupation, your environment, and lifestyle into consideration when buying clothes. 
                
                <br></br>
                <br></br>

                While the basics are usually similar, considering these things will help inform what to add, what to remove and what to focus on. For example a heavyweight coat would be essential if you lived in a very cold environment but would be a waste if you live in somewhere hot like Nigeria.

                <br></br>
                <br></br>
                You don't need to get everything on this list all at once. Take your time, you can acquire them slowly and not just throw all your cash at once.
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                Men's Wardrobe Essentials.

                <br></br>
                <br></br>
                These are the basics for you to start your style journey. With this list of items you should be able to build outfits for most occasions and develop your style from there. I'll divide this list into four categories: tops, bottoms, outerwear and shoes.
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                Tops

                <br></br>
                <br></br>
                The two basic types of tops that start with are the tee shirt and the button up shirt. The tee shirts should be plain and fit properly. For colours you should start with black, white and grey for maximum versatility and then you can add more colours as you wish.
                <br></br>
                <br></br>
                The button-up shirts can serve you for formal as well as casual occasions. For starters you can go for white and light blue shirts. If you want to add more interest you can go for shirts with a button down collar.
                <br></br>
                <br></br>

                A polo is another amazing top that is very versatile and a step up from your basic tee shirt. You can start with plain polo shirts with minimal or no branding or pattern in simple colours and then add more complexity as you get more confident.

                <br></br>
                <br></br>
                If you have polo shirts and want something more interesting you can try the long sleeve henley.
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            

                Bottoms


                <br></br>
                <br></br>
                Every man should have one pair black odd trousers in his wardrobe. It will be a very versatile item that can be worn for any situation, from a job interview to a casual dinner.
                <br></br>
                <br></br>
                A pair of well fitting dark denim is a staple in men's fashion. It is functional, durable and very versatile. For your first few pairs of jeans you should stick to classic styles and avoid jeans with distressing, rips, crazy washes and contrasting stitching.
                <br></br>
                <br></br>
                Chinos offer a fine balance between casual and formal. They are not as formal as dress pants and not as casual as jeans. You should start with colours like navy, grey, beige and tan.
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                Outerwear
                <br></br>
                <br></br>
                Outerwear will vary depending on your climate as well your lifestyle but there are certain items I believe every man should have. A hoodie or a crew neck sweater should be in every man's closet. They are great for layering and can be worn on their own as well.
                <br></br>
                <br></br>
                Another item another man should have regardless of climate is a blazer/sports coat. A blazer will always serve you well and can be implemented into business casual or smart casual outfits. A blazer is always good to have around because you never know when an important event can come up.
                <br></br>
                <br></br>
                Other outerwear options can generally fall into two categories: the lightweight (for hotter days) and heavyweight (for very cold situations). Examples of the lightweight outerwear are denim jackets, over shirts and bomber jackets. Examples of heavyweight outerwear are top coats, puffer jackets and pea coats.
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                Shoes
                <br></br>
                <br></br>
                Shoes are very personal and the needs vary from man to man but I believe every man can get by with these three shoes. One pair of dress shoes for the office and formal events. One pair of simple low top sneakers for casual outfits.
                <br></br>
                <br></br>
                The third can be any type of footwear of your choice. It could be a pair of boots, it could be running sneakers. This choice will be totally dependent on you and your lifestyle.
                <br></br>
                <br></br>
                For your dress shoes, you can start with a pair of penny loafers or double monk straps. These options are more versatile than other lace-up dress shoes like Oxfords or derbys.
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                A quick rundown
                <br></br>
                <br></br>
                Tops
                <br></br>
                <br></br>
                Plain tee shirts
                <br></br>
                Button up shirts
                <br></br>
                Polo shirts
                <br></br>
                <br></br>
                Pants
                <br></br>
                <br></br>
                Black odd trousers
                <br></br>
                Dark jeans
                <br></br>
                Chinos
                <br></br>
                <br></br>
                Outerwear
                <br></br>
                <br></br>
                Sweaters
                <br></br>
                Hoodies
                <br></br>
                A blazer
                <br></br>
                <br></br>
                Shoes
                <br></br>
                <br></br>
                Dress shoes
                <br></br>
                Simple sneakers
                <br></br>
                <br></br>
                With this least you should have all the building blocks for building great outfits. When you have got all the closest essentials, you can grow and add pieces depending on your style and preferences.
            </p>
        </section>
    );
}


function Footer (){
    return(
        <footer id="versatilefooter">
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