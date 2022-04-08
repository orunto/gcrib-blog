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
            <h1>How to clean your sneakers (The ultimate guide to sneaker care)</h1>
            <span>Fikayomi Akindele</span>
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