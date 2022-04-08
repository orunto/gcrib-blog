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
            <h1>Black Friday Sales - Scam or Not</h1>
            <span>Fikayomi Akindele</span>
            <PostPhoto></PostPhoto>
            <p>Holiday season is here and that means sales season is here. A lot of stores, both online and physical will offer a lot of sales between now and January next year. But the most popular and largely advertised is the black friday sale. You've seen or heard about them, the ridiculous discounts, the free shipping, the free items, some stores even change black friday sales from a day to a week or a month. These all seem too good to be true. Could there be something more to it? Is it a scam. These and many more are the questions that shall be answered in this article.

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                What is Black Friday?

                <br></br>
                <br></br>
                Black Friday is the Friday following Thanksgiving day in the United States. It is the day that stores market as the biggest sale in the year and offer jaw dropping discounts and consumers fill up the physical stores and sell out the online stores to grab hold of the sweet deals. Consumers use this opportunity to shop for Christmas gifts and also get the items they have had in their wishlist.
                <br></br>
                <br></br>
                While on surface level it will seem these promos are for the benefit of the consumer, you should not forget that businesses won't do things that will harm their bottom line. Black Friday won't exist if it didn't benefit the stores.

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                The Tricks of Black Friday

                <br></br>
                <br></br>
                From a business perspective, the aim of Black Friday is to increase sales and in turn increase profit. Corporations apply different tricks and tactics to make more money. I will be sharing with you some of the more common tricks, so you won't fall for them.
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                False Discounts

                <br></br>
                <br></br>
                This is a very common trick. It is when the price of an item is increased by two or three times the normal retail price and then discounted to the retail price with claims of a heavy discount. An example would be if a tee shirt with ba retail price of #3000 is increased to #6000 and then discounted by 50% back to #3000. In some cases the discounted price becomes more than the original retail.
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                The Free Shipping Tactic

                <br></br>
                <br></br>
                This is when you are offered free shipping for an item but only if you buy a couple more items or spend up to a certain amount. This is to insensitivice you to buy more than you planned to.
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                Up to 99% off

                <br></br>
                <br></br>
                This is usually present when the sale is being advertised. You see things like up to 99% off. Generally consumers focus on the 99% part and rush to the site or store, which is the aim. When you arrive at the store you buy a lot of things, which usually are things you don't need.
                <br></br>
                <br></br>
                The item with the 99% discount is usually a single unit of the item or an item you don't want. This tactic is to drive people to the store or website and increase the chances of sales.
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                So the Sales are a Scam then?


                <br></br>
                <br></br>
                No they're not. While some stores or merchants may employ some dishonest tactics to increase sales, if you are aware of these tactics and are more mindful with your shopping you will gain the most out of these sales and not end up with things you don't need.
                <br></br>
                <br></br>
                Here are some ways to gain the most out of the sales:
                <br></br>
                <br></br>
                Keep a wishlist and take note of the prices. By doing this you keep track of the items you want and will know if discounts are real or not. This also helps you buy the important items first when you have some spending capital. You can use a tool like Karma (formally shoptagr) to keep your wishlist, it also informs you of the items are back in stock or any price difference.
                <br></br>
                <br></br>
                Be disciplined. This will help you be more mindful with your purchase and avoid impulse buying. You won't fall for sales of items you don't need and end up with buyers remorse. Only buy what you came for and check out
                <br></br>
                <br></br>
                Source for discount codes. Discount codes will always be helpful when you are shopping online. A great way to get discount codes is to join the mailing list of the store. Stores will often send some exclusive deals or discount codes to people on their mailing lists. Another way to get discount codes is to check on social media influencers that are affiliated with the store.
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                In conclusion, Black Friday sales are not a scam if used properly and I'm sure that with this information I have given you, you will get the most out of this year's Black Friday sales. To help with that I'll be sharing with you some amazing Black Friday deals on Jumia.
                <br></br>
                <br></br>
            </p>
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