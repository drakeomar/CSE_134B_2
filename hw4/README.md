
    NAME: DRAKE OMAR 

    PID: A15326724

    NETLIFY LINK: https://spectacular-fox-5cf6da.netlify.app/

    PUBLIC GITHUB: https://github.com/drakeomar/CSE_134B_2

Part 1:
        
    All of this part is contained within nativedialogs.html-- I simply included a script tag 
        with the appropriate script. 
    Prompt vs Safer Prompt: 
        The main difference between the two is the lack of DOM purification or 
        "sanitization" in the regular prompt displayed. This means that potentially
        malicious code entered as user input may be able to be injected, and, in
        general, the regular prompt is more susceptible to XSS attacks. The Safer
        Prompt takes advantage of DOMPurify in order to remove potentially harmful 
        bits of HTML all in order to scrub user input. 

    For the tagged template literals, 

    I utilized setTimeout in order to properly clear the output tag before displaying
    the alert.

Part 2:

    For the custom dialog section, there is customdialog.html and customdialog.js. 
    
Part 3:

        For prepopulating the localStorage array and page with dummy posts, I simply initialized the
        array within localStorage storing all the posts with 4 generic blog postings.
        If this requirement did not exist, and/or if persistence across page loads was a requirement,
        then I would have simply populated the page with whatever exists in the array "posts"
        within localStorage.
Part 4:
        styledcrud.html is the html file for the styled CRUD Blog page. I changed the color scheme, added
        fonts and styled up the posts and buttons-- fixing alignment/display, as well.
        A lot of the styling for this part is inlined within the styledblog.js filed itself and
        then written onto styledcrud.html. However, there is also a styledblog.css file attached for certain 
        responsibilities.

Part 5: 

    Information found in changelog.md: 

