function topics() {
    return (
       <>
                    <h2>Web Dev Concepts</h2>
                    <nav class= "local">
                        <a href="#Servers">Web Servers</a>
                        <a href="#Frontend">Frontend Design</a>
                        <a href="#Pictures">Images</a>
                        <a href="#Favicons">Favicons</a>
                    </nav>
                    <article id="Servers">
                        <h3>Web Servers</h3>

                        <p>A <strong>designated home page</strong> is the default page that is returned by a web server. It is represented by the index file in the web server. 
                            It may contain hyperlinks to other media housed by the web server. This serves as a main hub for users to access media in the server.</p>
                            
                        <p>In the browser's <strong>Inspector-{">"}Network</strong> tab you can see the "a2-doerinry" folder, which contains "index.html", with the <strong>domain server</strong> being the ENGR web server. 
                            Its response status code is 200, indicating that the request was successful. favicon.ico is another resource with a code of 200, it is the graphic icon for the browser.  
                            One can also see a "main.js" file and a "main.css" file, both of which have a code of 404, indicating that these requested resources could not be found. 
                            This differs from the local version of the site where no requests are made to the network as the html file is stored locally.</p>
                        
                        <p> Also in the network tab, "favicon.ico" returns status 200 because the resource is successfully returned by the web server. 
                            "main.css" and "main.js" have a status of 400 because the web server did not return these resources because they do not exist.</p>
                        
                        <p>The <strong>URL</strong> for this site is https://web.engr.oregonstate.edu/~doerinry/a3-doerinry/. The scheme is "https://", indicating that the protocol used to request the resource is https. 
                            The subdomain is "web.engr" which is a subsection of the host domain "oregonstate.edu". "/~doerinry/a2-doerinry/" is the path to the resource which is from my personal "doerinry" folder 
                            to the folder containing this page "a1-doerinry".</p>
                    </article>
                    <article id="Frontend">
                        <h3>Frontend Design</h3>
                        <p>Frontend design is the practice of creating a user friendly website. This includes both the visual design of a page as well as the interactive and navigational experience.</p>
                        <dl>
                            <dt>Effective</dt>
                            <dd>A site must be <strong>effective</strong> at its intended purpose</dd>
                            <dt>Efficient</dt>
                            <dd>A site must allow for <strong>efficient</strong> navigation by users</dd>
                            <dt>Easy</dt>
                            <dd>A site must be <strong>easy</strong> to navigate for its intended audience</dd>
                            <dt>Error-free</dt>
                            <dd>A site must be <strong>free</strong> of <strong>errors</strong> that might hinder the user experience</dd>
                            <dt>Enjoyable/Engaging</dt>
                            <dd>A site should be <strong>enjoyable</strong> and <strong>engaging</strong> to the user</dd>
                        </dl>
                        <p><strong>&lt;header&gt;</strong> is the tag used to denote the banner at the top of a site, usually containing a name, publisher or slogan.
                        <strong>&lt;main&gt;</strong> denotes the primary block of the website that has content.
                        <strong>&lt;section&gt;</strong> is used to group sets of content that are thematically similar.
                        <strong>&lt;article&gt;</strong> is used within a section to denote a single topic in that group.
                        <strong>&lt;footer&gt;</strong> is the block at the bottom of a site that often contains legal information.
                        <strong>&lt;div&gt;</strong> is a placeholder for dynamic content and has no style.
                        </p>
                        <ol>
                            <li><strong>External Anchors-</strong> Link URL's of other sites to the webpage</li>
                            <li><strong>Internal Anchors-</strong> Use IDs to link from one text item to another on the same webpage</li>
                            <li><strong>Page-to-Page-</strong> Use buttons or similar anchors to navigate from one page in a website to another</li>

                        </ol>
                    </article>
                    <article id="pictures">
                        <h3>Images</h3>
                        <ul>
                            <li>Descriptive File Name - to make files easy to search.</li>
                                <li>Small File Size - to help ensure fast load times.</li>
                                <li>Exact Dimensions - so images will fit the dimension of your site.</li>
                                <li>Correct Format - so images have correct technical features.</li>
                                <li>Reduced Resolution - so pages are displayed correctly for all monitors.</li>
                                <li>Color Mode - so colors are standardized on the site.</li>
                            </ul>
                        <p>
                            For line art PNG, SVG, and GIF are the most common formats. This is because these can handle transparency and will have better clarity than other formats.
                        </p>
                    </article>
                    <article id="Favicons">
                        <h3>Favicons</h3>
                        <p>Favicon are logos for websites. They are stored in several formats to ensure compataibilty across devices and formats. The most common of these are .ico, .png, and .svg.</p>
                    </article>

</>
    );
}
export default topics;