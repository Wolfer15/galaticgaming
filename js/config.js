/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*  Leaked by ♏α⊥⊥ḯṧḯṧм  */

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "GalaticGaming";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/marines_doing_stuff_by_lolcopter121-d680kst.jpg",
	"backgrounds/images/u_s_marines_walk_through_a_middle_eastern_town__by_lolcopter121-d4msftt.jpg",
	"backgrounds/images/binkusmc1_l_11657.jpg",
	"backgrounds/images/insbaghdad0003ed.jpg",
	"backgrounds/images/royal_marines_in_some_woods_by_chestymcgee.jpg",
	"backgrounds/images/WGV22.jpg",
	"backgrounds/images/u_s_army_battalion_assault_by_lordhayabusa357-d55l3d5.jpg",
	"backgrounds/images/u_s_army_52nd_female_brigade_by_lordhayabusa357-d55k77j.jpg",
	"backgrounds/images/the_elder_scrolls_6__guantanamo_bay_by_superninjanub-d6ridqq.jpg",
	"backgrounds/images/tf141_what_do_you_wear__idiot__by_marineacu-d3aybdf.jpg",
	"backgrounds/images/NBmaY.jpg",
	"backgrounds/images/mw3__random_delta_force_member_running_from_boxes_by_marineacu-d4ga075.jpg",
	"backgrounds/images/images.jpg",
	"backgrounds/images/images (1).jpg",
	"backgrounds/images/gmblack0018ed.jpg",
	"backgrounds/images/furry_strike_bf2_by_32rabbit-d7sc5eb.jpg",
	"backgrounds/images/download.jpg",
	"backgrounds/images/binkusmc4_l_11657.jpg",
	"backgrounds/images/ain_t_nothing_gonna_stop_corporal_zoey_by_lordhayabusa357-d6r4wwq.png",
	"backgrounds/images/1024x768.jpg",
	"backgrounds/images/bink-us20081_1_6712.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = false;

/*Display actual song's name?*/
var l_musicDisplay = false;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "U06jlgpMtQs", name: "USSR"},
    {youtube: "wQTInhga9OI", name: "Apollo 3 - Superhelden"},
	{youtube: "mNR2hWyFrAs", name: "Apollo 3 - Startschuss"},
	{youtube: "0PH72d26KTI", name: "Soviet Techno Anthem Remix"},
	{youtube: "BEm0AjTbsac", name: "The Misty Mountains Cold - The Hobbit"},
	{youtube: "_MmoFJddZjU", name: "Sean & Bobo - Drop the bass low (Original Mix)"},
	{youtube: "3YV14KjbRIA", name: "Cascada - Everytime We Touch lyrics"},
	{youtube: "vt1Pwfnh5pc", name: "Johnny Cash - Hurt"},
	{youtube: "708mjaHTwKc", name: "KSI - Lamborghini (Explicit) ft. P Money"},
	{youtube: "hr40osuGgZ4", name: "Midnight Riders - Save Me Some Sugar (This Won't Take Long)"},
	{youtube: "psuRGfAaju4", name: "Owl City - Fireflies"},
	{youtube: "SHnTocdD7sk", name: "Weird Al- Yankovic - Trapped In The Drive-Thru"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 15;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Welcome to GalaticGaming",
"Type in !donate To Purchase Custom Classes, Vip And Just To Support The Server",
"This Server is Being Heavyly Modfied Right now!",
"Thanks For Joining Us!",
"Enjoy the server"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;