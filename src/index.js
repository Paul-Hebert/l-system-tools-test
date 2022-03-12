import { parse, SvgRenderer } from "l-system-tools";

// The renderer expects to be passed an SVG element when initialized
const renderer = new SvgRenderer(document.querySelector("svg"));

renderer.render({
  commandString: parse({
    axiom: "F",
    productions: {
      F: {
        replacement: "F[-F][+F]",
      },
    },
    iterations: 5,
  }),
  // Optionally define a starting rotation (determines starting direction)
  // Defaults to 90 (degrees)
  startRotation: 180,
  // Optionally define a rotation for how far to turn when a turn command is encountered
  // Defaults to 30 (degrees)
  turnRotation: 30,
  // Optionally define a distance to move when a forward command is encountered
  // Defaults to 10
  distance: 10,
  // Optionally define a starting poition
  // Defaults to { x: 50, y: 50 }
  startPosition: { x: 50, y: 100 },
});
