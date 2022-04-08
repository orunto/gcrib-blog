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
            <h1>5 outfit mistakes you make</h1>
            <span>Fikayomi Akindele</span>
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
Think of accessories like the paint on a building. Your outfit may be basic but when you add accessories, it takes it to the next level. Your outfit may be a four but when you slap on a watch, a necklace and maybe a few rings, your outfit easily becomes an eight. The good thing about accessories is that there is something to suit everyone and every occasion. The best place to start is a simple watch, then you can go into bracelets, rings and necklaces from there.

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                You are looking at the wrong inspiration
                <br></br>
                <br></br>
Finally and possibly the most important is the source of your inspiration. Many people get outfit inspiration from people that are different from them, It could be height, physic, complexion, occupation and more. Take for example if you are a 5’7 doctor that wants to upgrade your style and you follow the style of a 6’ fashion model (without knowledgeable alterations), his style may not work well for you. That doesn’t mean you can’t be inspired by people different from you, it just means you should be mindful of these differences and adjust them to suit you properly. Check out Gentlemen's Crib on Twitter, Instagram, Facebook and LinkedIn or WhatsApp for your source of inspiration


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