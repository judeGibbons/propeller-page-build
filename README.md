#Propeller page build

This is webpage built from a <a href="index.jpg" target="_blank">layered Photoshop file provided</a>. Here is a link to the <a href="http://gimaju.net/propeller" target="_blank">final built page</a>.

The code is completely handwritten with no use of libraries, frameworks or preprocessors. I have tried to use a BEM-style naming convention.

**Fonts:** I have used the font Montserrat loaded from the Google Fonts API (which I wouldn't use in production), but Calluna Italic isn't available free of charge so I have subsituted the Google font Volkhov: this is a bit heavier and so looks different and in some cases runs to an extra line than it should do.

**Images:** I have not used a responsive image technique (srcset or picture) in this case but given the image-heavy nature of the page this would be best practice. Some of the images have been loaded in a single sprite, but not the main logo or the social media icons as these are semantic content and so shouldn't be inserted as background images.

**Responsiveness:** in this case I built the full-width version first to match the visual rather than build it mobile-first.

**JavaScript:** I have used JavaScript to display the menu on mobile when the 'menu' link is clicked. I have created a version which displays without JavaScript, but as this would permanently overlay the social media links I have added an anchor to the social media links in the footer. The JavaScript code is based on that which I wrote for a project a while back, a website for a <a href="https://github.com/judeGibbons/landshape" target="_blank">landscape design company</a>.

I will be adding a carousel with JavaScript functionality.