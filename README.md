#Propeller page build

This is webpage built from a <a href="index.jpg" target="_blank">layered Photoshop file provided</a>. Here is a link to the <a href="http://gimaju.net/propeller" target="_blank">final built page</a>.

The code is completely handwritten with no use of libraries, frameworks or preprocessors. I have tried to use a BEM-style naming convention.

**Fonts:** I have used the font Montserrat loaded from the Google Fonts API (which I wouldn't use in production), but Calluna Italic isn't available free of charge so I have subsituted the Google font Volkhov: this is a bit heavier and so looks different and in some cases runs to an extra line than it should do.

**Images:** I have not used a responsive image technique (srcset or picture) in this case but given the image-heavy nature of the page this would be best practice. Some of the images have been loaded in a single sprite, but not the main logo or the social media icons as these are semantic content and so shouldn't be inserted as background images.

**Responsiveness:** in this case I built the full-width version first to match the visual rather than build it mobile-first, as is recommended.

**JavaScript:** I have used JavaScript to display the menu on mobile when the 'menu' link is clicked. I have created a version which displays without JavaScript, but as this would permanently overlay the social media links I have added an anchor to the social media links in the footer. The JavaScript code is based on that which I wrote for a project a while back, a website for a <a href="https://github.com/judeGibbons/landshape" target="_blank">landscape design company</a> (although in retrospect I should have started from scratch!).

**Needs more work:**

+ The carousel markers have been added with JavaScript, but they need to have an 'active' class added and removed in the same way as the images so that the active one can be styled.

+ The rollovers on the Calls to Action aren't obvious on touch devices - I would detect for touch and display the text permanently on a touch device. I wouldn't use the 'click here' wording.

+ The select dropdowns on the signup form birthday field don't quite match the visual: I have left the default arrows (which are double arrows on a Mac) rather than replace them with a background image. Ideally I would restyle the visible part of these keeping the default styles for the dropdown itself and currently the styling produces white text on white on IE. They need better styling when the viewport narrows: maybe bringing the label/legend above the fieldset and making that full-width. (I wouldn't have dropdowns for dates in this case - 31 is too many entries to use comfortably. It should also have validation so that you cannot enter e.g. 31 February.)