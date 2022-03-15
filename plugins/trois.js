import Scene from "~/scene.js";

export default ({ store, app, route }, inject) => {
  let scene;

  const initScene = () => {
    // eslint-disable-next-line no-unused-vars
 

    inject("scene", scene);
  };

  const init = () => {
    // initScene();
  };

  init();
};
