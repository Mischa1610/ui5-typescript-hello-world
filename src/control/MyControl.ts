import Control from "sap/ui/core/Control";
import RenderManager from "sap/ui/core/RenderManager";

/**
 * @namespace ui5.typescript.helloworld.control
 */
export default class MyControl extends Control {
  // The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
  constructor(idOrSettings?: string | $MyControlSettings);
  constructor(id?: string, settings?: $MyControlSettings);
  constructor(id?: string, settings?: $MyControlSettings) {
    super(id, settings);
  }

  static readonly metadata = {
    properties: {
      text: "string",
    },
  };

  static renderer = function (rm: RenderManager, control: MyControl) {
    rm.openStart("div", control);
    rm.openEnd();
    rm.text(control.getText());
    rm.close("div");
  };

  onclick = function () {
    alert("Hello World!");
  };
}
