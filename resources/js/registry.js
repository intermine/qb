import { d3jsonPromise } from './utils.js';

let registryUrl = "http://registry.intermine.org/service/instances";
let registryFileUrl = "./resources/testdata/registry.json";

function initRegistry (cb) {
    return d3jsonPromise(registryUrl)
      .then(cb)
      .catch(() => {
          alert(`Could not access registry at ${registryUrl}. Trying ${registryFileUrl}.`);
          d3jsonPromise(registryFileUrl)
              .then(cb)
              .catch(() => {
                  alert("Cannot access registry file. This is not your lucky day.");
                  });
      });
}

export { initRegistry };
