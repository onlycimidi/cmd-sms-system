import Login from "./src/Base/Login.js";
import Loaders from "./src/Base/Load.js";
import cmd from "./src/Base/cmd.Client.js";
global.client = new cmd();

// system required \\

Login.On();
Loaders.LoadEvents("./src/events");
