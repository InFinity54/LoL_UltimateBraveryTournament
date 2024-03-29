import { movToolSelectorBackground } from "../common/movies";
import { movToolSelectorChampListGeneratorButtonActiveLoop, movToolSelectorChampListGeneratorButtonActiveIntro } from "../common/movies";
import { movToolSelectorStuffGeneratorButtonActiveLoop, movToolSelectorStuffGeneratorButtonActiveIntro } from "../common/movies";
import { sndMenuItemClick, sndToolSelectorConfirmButtonClick, sndToolSelectorConfirmButtonHover, sndToolSelectorExitButtonClick } from "../common/sounds";
import { sndToolSelectorExitButtonHover, sndToolSelectorToolAreaClick } from "../common/sounds";
import { playSound } from "../common/audio";
import { playMovie } from "../common/video";
import { returnToHomepage } from "../app";

const champListGeneratorToolArea = jQuery("#toolselector_champlistgenerator");
const champListGeneratorToolStaticIcon = jQuery("#toolselector_champlistgenerator_staticicon");
const champListGeneratorToolAnimatedIcon = jQuery("#toolselector_champlistgenerator_animatedicon");
const soloStuffGeneratorToolArea = jQuery("#toolselector_solostuffgenerator");
const soloStuffGeneratorToolStaticIcon = jQuery("#toolselector_solostuffgenerator_staticicon");
const soloStuffGeneratorToolAnimatedIcon = jQuery("#toolselector_solostuffgenerator_animatedicon");
const stuffGeneratorToolArea = jQuery("#toolselector_stuffgenerator");
const stuffGeneratorToolStaticIcon = jQuery("#toolselector_stuffgenerator_staticicon");
const stuffGeneratorToolAnimatedIcon = jQuery("#toolselector_stuffgenerator_animatedicon");
const exitButton = jQuery("#toolselector_exitbutton");
const confirmButton = jQuery("#toolselector_confirmbuttoncontainer");
const backgroundPlayer = jQuery("#toolselector_background");

function initToolSelector() {
  backgroundPlayer.attr("src", movToolSelectorBackground);
  backgroundPlayer[0].loop  = true;
  playMovie(backgroundPlayer[0]);
}

jQuery(".toolselector_tab").click((event) => {
  playSound(sndMenuItemClick);
  jQuery(".toolselector_currenttab").removeClass("homepage_currenttab");
  jQuery("#" + event.target.id).addClass("homepage_currenttab");
});

champListGeneratorToolArea.on('mouseenter', () => {
  playSound(sndMenuItemClick);
  champListGeneratorToolStaticIcon.css("background-image", jQuery("#toolselector_champlistgenerator_staticicon_hover").css("background-image"));
});

champListGeneratorToolArea.on('mouseleave', () => {
  champListGeneratorToolStaticIcon.css("background-image", jQuery("#toolselector_champlistgenerator_staticicon_default").css("background-image"));
});

champListGeneratorToolArea.on("click", () => {
  playSound(sndToolSelectorToolAreaClick);
  champListGeneratorToolAreaClickAnimation();
});

soloStuffGeneratorToolArea.on('mouseenter', () => {
  playSound(sndMenuItemClick);
  stuffGeneratorToolStaticIcon.css("background-image", jQuery("#toolselector_solostuffgenerator_staticicon_hover").css("background-image"));
});

soloStuffGeneratorToolArea.on('mouseleave', () => {
  soloStuffGeneratorToolStaticIcon.css("background-image", jQuery("#toolselector_solostuffgenerator_staticicon_default").css("background-image"));
});

soloStuffGeneratorToolArea.on("click", () => {
  playSound(sndToolSelectorToolAreaClick);
  soloStuffGeneratorToolAreaClickAnimation();
});

stuffGeneratorToolArea.on('mouseenter', () => {
  playSound(sndMenuItemClick);
  stuffGeneratorToolStaticIcon.css("background-image", jQuery("#toolselector_stuffgenerator_staticicon_hover").css("background-image"));
});

stuffGeneratorToolArea.on('mouseleave', () => {
  stuffGeneratorToolStaticIcon.css("background-image", jQuery("#toolselector_stuffgenerator_staticicon_default").css("background-image"));
});

stuffGeneratorToolArea.on("click", () => {
  playSound(sndToolSelectorToolAreaClick);
  stuffGeneratorToolAreaClickAnimation();
});

exitButton.on("mouseenter", () => {
  playSound(sndToolSelectorExitButtonHover);
});

exitButton.on("click", () => {
  playSound(sndToolSelectorExitButtonClick);
  returnToHomepage();
});

confirmButton.on("mouseenter", () => {
  playSound(sndToolSelectorConfirmButtonHover);
});

confirmButton.on("click", () => {
  const selectedTool = jQuery(".toolselector_currentselectedtool")[0].id.replace("toolselector_", "");
  const toolSelectorPage = jQuery("#toolselector");
  playSound(sndToolSelectorConfirmButtonClick);

  switch (selectedTool) {
    case "champlistgenerator":
      toolSelectorPage.fadeOut(500);
      jQuery("#champlistgenerator").fadeIn(500);
      break;
    case "solostuffgenerator":
      toolSelectorPage.fadeOut(500);
      jQuery("#solostuffgenerator").fadeIn(500);
      break;
    case "stuffgenerator":
      toolSelectorPage.fadeOut(500);
      jQuery("#stuffgenerator").fadeIn(500);
      break;
  }
});

function champListGeneratorToolAreaClickAnimation() {
  stuffGeneratorToolAnimatedIcon.hide();
  soloStuffGeneratorToolAnimatedIcon.hide();
  champListGeneratorToolAnimatedIcon.show();

  champListGeneratorToolAnimatedIcon.attr("src", movToolSelectorChampListGeneratorButtonActiveIntro);
  champListGeneratorToolAnimatedIcon[0].loop = false;
  playMovie(champListGeneratorToolAnimatedIcon[0]);

  champListGeneratorToolAnimatedIcon.on("ended", () => {
    champListGeneratorToolAnimatedIcon.attr("src", movToolSelectorChampListGeneratorButtonActiveLoop);
    champListGeneratorToolAnimatedIcon[0].loop = true;
    playMovie(champListGeneratorToolAnimatedIcon[0]);
  });

  jQuery(".toolselector_currentselectedtool").removeClass("toolselector_currentselectedtool");
  champListGeneratorToolArea.addClass("toolselector_currentselectedtool");
}

function soloStuffGeneratorToolAreaClickAnimation() {
  champListGeneratorToolAnimatedIcon.hide();
  stuffGeneratorToolAnimatedIcon.hide();
  soloStuffGeneratorToolAnimatedIcon.show();

  soloStuffGeneratorToolAnimatedIcon.attr("src", movToolSelectorStuffGeneratorButtonActiveIntro);
  soloStuffGeneratorToolAnimatedIcon[0].loop = false;
  playMovie(soloStuffGeneratorToolAnimatedIcon[0]);

  soloStuffGeneratorToolAnimatedIcon.on("ended", () => {
    soloStuffGeneratorToolAnimatedIcon.attr("src", movToolSelectorStuffGeneratorButtonActiveLoop);
    soloStuffGeneratorToolAnimatedIcon[0].loop = true;
    playMovie(soloStuffGeneratorToolAnimatedIcon[0]);
  });

  jQuery(".toolselector_currentselectedtool").removeClass("toolselector_currentselectedtool");
  soloStuffGeneratorToolArea.addClass("toolselector_currentselectedtool");
}

function stuffGeneratorToolAreaClickAnimation() {
  champListGeneratorToolAnimatedIcon.hide();
  soloStuffGeneratorToolAnimatedIcon.hide();
  stuffGeneratorToolAnimatedIcon.show();

  stuffGeneratorToolAnimatedIcon.attr("src", movToolSelectorStuffGeneratorButtonActiveIntro);
  stuffGeneratorToolAnimatedIcon[0].loop = false;
  playMovie(stuffGeneratorToolAnimatedIcon[0]);

  stuffGeneratorToolAnimatedIcon.on("ended", () => {
    stuffGeneratorToolAnimatedIcon.attr("src", movToolSelectorStuffGeneratorButtonActiveLoop);
    stuffGeneratorToolAnimatedIcon[0].loop = true;
    playMovie(stuffGeneratorToolAnimatedIcon[0]);
  });

  jQuery(".toolselector_currentselectedtool").removeClass("toolselector_currentselectedtool");
  stuffGeneratorToolArea.addClass("toolselector_currentselectedtool");
}

champListGeneratorToolAreaClickAnimation();

export { initToolSelector };
