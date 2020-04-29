---
excerpt: Today I found out that Firefox, my browser of choice, has some great features for web developers who love to tinker with the styles of things. As it turns out, not only can you edit the styles of the web browser window itself, but even use the familiar element inspector on it to help you do so. The best thing about this is that it isn’t only great for advanced web developers, but also people who want to practice their CSS skills on the thing they’ll probably be staring at more than anything else.
isLive: true
---

# Customizing Firefox with CSS

Today I found out that Firefox, my browser of choice, has some great features for web developers who love to tinker with the styles of things. As it turns out, not only can you edit the styles of the web browser window itself, but even use the familiar element inspector on it to help you do so. The best thing about this is that it isn’t only great for advanced web developers, but also people who want to practice their CSS skills on the thing they’ll probably be staring at more than anything else.


# Setting up browser toolbox

To set this up, we’re going to first have to edit a few settings in Firefox.
To get the browser inspector, or what Firefox calls the “browser toolkit”, you’re going to open your developer tools (F12), click the little … icon in the upper right hand corner, and select the “Settings” option in the floating menu. 

![Dev settings window](https://dev-to-uploads.s3.amazonaws.com/i/wq6m38g43ate6vhaxlac.png)


Take a look at the Advanced settings panel, and make sure that you check “Enable browser chrome and add-on debugging toolboxes”, and “Enable remote debugging” (yes, this is required, even if you’re debugging on your own machine)
Now we’re all set to play around!
![Advanced settings panel](https://dev-to-uploads.s3.amazonaws.com/i/su876mo1lvz8qmdllilu.png)

# Inspecting the browser

If you hit the key combination `Ctrl Shift Alt I` you’ll open up 2 new windows. One will be completely blank, and the other will ask you about incoming requests. Click yes, and the blank window will turn into the familiar inspector window… this time for your browser window. Hovering over the elements in the inspector will show an outline over the corresponding elements on the browser window itself.

![Browser inspector](https://dev-to-uploads.s3.amazonaws.com/i/4k1i6an793q1v1wgu5gb.png)

If you look for the “box” element, that represents the top part of the browser, so expand that.  From here, you can keep expanding things and play around with them in the style pane on the right, to see how they look. I’d recommend playing around with this for a bit to see how everything works. 

# Setting up a Stylesheet

If you’ve found a change that you like the look of, and want to keep beyond this session, you can force Firefox to load a custom .css file. First, we have to tell Firefox to check for the css file on startup.


Copy and paste `about:config` into the address bar, and hit enter to open the page.

![about:config page](https://dev-to-uploads.s3.amazonaws.com/i/8irqfd33rkiag4hvskri.PNG)

Click “accept the risk and continue”, we won’t be doing anything dangerous here. 
Type userprof into the search bar, and double click the box that is titled `toolkit.legacyUserProfileCustomizations.stylesheets`. This just tells Firefox that you want it to search for the CSS file on startup.  



The next step is to actually create the CSS file.

To do so, you should copy paste `about:support` into the address bar, and hit enter. 

![About:support page](https://dev-to-uploads.s3.amazonaws.com/i/hqhu3gvfohkxe54ceav0.png)

You’ll see a page like this. Click the Open Folder button in the Profile Folder section, and it’ll open up your file explorer in the folder for your Firefox profile. 


If there is a chrome folder, navigate inside of it, and create or edit a file named `userChrome.css`.

If there isn’t, create a folder named chrome, and create a file inside named `userChrome.css`.

This is the file where your browser styles can be saved to. You’ll probably need a lot of !important in this file, since the specificity can be really hard to overwrite in some places. 

You can put whatever you want in here to make the browser yours, but this is the code that I have in mine. It will make the browser hide the bookmarks bar when you aren’t hovering your mouse over it, and it’ll make the address bar curved like it is in google chrome. 

```css
#urlbar{
    border-radius:25px !important;
}
 
#PersonalToolbar{
    --uc-bm-height: 20px; /* Might need to adjust if the toolbar has other buttons */
    --uc-bm-padding: 6px; /* Vertical padding to be applied to bookmarks */
  }
  
  :root[uidensity="compact"] #PersonalToolbar{ --uc-bm-padding: 1px }
  :root[uidensity="touch"] #PersonalToolbar{ --uc-bm-padding: 6px }
  
  #PersonalToolbar:not([customizing]){
    margin-bottom: calc(2px - var(--uc-bm-height) - 2 * var(--uc-bm-padding));
    transform: rotateX(90deg);
    transform-origin: top;
    transition: transform 135ms linear 600ms !important;
    z-index: 1;
  
  }
  #PlacesToolbarItems {   
    display: flex !important;   
    justify-content: center !important; 
}
  #PlacesToolbarItems > .bookmark-item{ padding-block: var(--uc-bm-padding) !important; }
  
  
  /* SELECT ONE BOOKMARKS TOOLBAR BEHAVIOR */
  
  /* ONE | Show when urlbar is focused 
       #nav-bar:focus-within + #PersonalToolbar{ 
       transition-delay: 100ms !important; 
       transform: rotateX(0); 
   } */
  
  /* TWO | Show when cursor is over the toolbar area 
  My Personal Choice
  */
  #navigator-toolbox:hover > #PersonalToolbar{
    transition-delay: 100ms !important;
    transform: rotateX(0);
  }


```

Restart your Firefox, and your browser should look like this. 

![New look](https://dev-to-uploads.s3.amazonaws.com/i/21f6y1cyvr041e689gvm.PNG)

If you want to find ideas or code to use, check out the [/r/firefoxCSS subreddit](https://old.reddit.com/r/firefoxcss)!

