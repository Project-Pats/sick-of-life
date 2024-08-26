import Webamp from "webamp"; // eslint-disable-line import/no-unresolved
// This import gives us a URL to llama.mp3
import llama from "./llama.mp3";
import internetArchiveSkin from "./internetArchive.wsz";
import topazSkin from "./TopazAmp1-2.wsz";

if (!Webamp.browserIsSupported()) {
  alert("Oh no! Webamp does not work in this browser!");
  throw new Error("What's the point of anything?");
}

const webamp = new Webamp({
  initialTracks: [
    {
      metaData: {
        artist: "DANNY L HARLE",
        title: "TEARDROPS (BEN DOOKS REMIX) (FALLEN SHRINE BOOTLEG)"
      },
      url: 1,
      duration: 5.322286// Replace with actual duration
    },
    {
      metaData: {
        artist: "Fallen Shrine & G♡soiid",
        title: "PLAY DAT – S4X"
      },
      url: 2,
      duration: 5.322286  // Replace with actual duration
    },
    {
      metaData: {
        artist: "GGB x Fallen Shrine",
        title: "Fallen (shrine) in ur arms"
      },
      url: 3,
      duration: 5.322286 // Replace with actual duration
    },
    {
      metaData: {
        artist: "Unknown Artist",
        title: "Gold"
      },
      url: 4,
      duration: 5.322286 // Replace with actual duration
    },
    {
      metaData: {
        artist: "Unknown Artist",
        title: "HOLDING 0N T0 Y0U"
      },
      url: 5,
      duration: 5.322286 // Replace with actual duration
    },
    {
      metaData: {
        artist: "Unknown Artist",
        title: "I do believe"
      },
      url: 6,
      duration: 5.322286 // Replace with actual duration
    },
    {
      metaData: {
        artist: "Lil' BaeBlade X Fallen Shrine",
        title: "Can't define our luv"
      },
      url: 7,
      duration: 5.322286 // Replace with actual duration
    },
    {
      metaData: {
        artist: "SPANISHNXC",
        title: "NOT A RAVE TOOL 11"
      },
      url: 8,
      duration: 5.322286// Replace with actual duration
    }
  ],
  availableSkins: [
    { url: internetArchiveSkin, name: "Internet Archvie" },
    { url: topazSkin, name: "Topaz" }
  ],
  handleAddUrlEvent: async () => {
    console.log("handleAddUrlEvent");
  },
  handleLoadListEvent: async () => {
    console.log("hanldeLoadListEvent");
    return [];
  },
  handleSaveListEvent: tracks => {
    console.log("handleSaveListEvent");
  }
});

// An example of handling the close button and giving a way to reopen WEebamp
webamp.onClose(() => {
  const open = document.createElement("button");
  open.innerText = "Reopen";
  document.getElementById("app").appendChild(open);
  function handleClick() {
    webamp.reopen();
    open.remove();
    open.removeEventListener("click", handleClick);
  }
  open.addEventListener("click", handleClick);
});

webamp.onWillClose(cancel => {
  if (!window.confirm("Are you sure you want to close Webamp?")) {
    cancel();
  }
});

// An example of adding external ways to control Webamp's behavior.
const buttonBindings = [
  { id: "prev", cb: () => webamp.previousTrack() },
  { id: "play", cb: () => webamp.play() },
  { id: "pause", cb: () => webamp.pause() },
  { id: "stop", cb: () => webamp.stop() },
  { id: "next", cb: () => webamp.nextTrack() },
  {
    id: "move",
    cb: () =>
      webamp.store.dispatch({
        type: "UPDATE_WINDOW_POSITIONS",
        positions: {
          main: { x: 0, y: 0 },
          playlist: { x: 100, y: 100 },
          equalizer: { x: 200, y: 200 },
          milkdrop: { x: 300, y: 300 }
        }
      })
  }
];
buttonBindings.forEach(({ id, cb }) => {
  document.getElementById(id).addEventListener("click", cb);
});

// An example of shoing the currently playing track
webamp.onTrackDidChange(trackInfo => {
  const { artist, title } = trackInfo.metaData;
  // Another option might be to set `document.title`;
  document.getElementById(
    "current-track"
  ).innerText = `Now playing: ${title} by ${artist}`;
});

// Here we go! Let's show Webamp.
webamp.renderWhenReady(document.getElementById("app"));
