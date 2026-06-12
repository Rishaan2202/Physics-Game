import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";

kaplay();

setGravity(1600);

const ball = add (
        [
            circle(50),
            pos(650, 150),
            color(50, 50, 50),
            area(),
            body({ bounce: 0.7 })
        ]
    );

const floor = add (
        [
            rect(width(), 100),
            pos(0, 500),
            color(50, 50, 50),
            area(),
            body({ isStatic: true, bounce: 1 })
        ]
    );

onKeyPress((key) => {
    debug.log(key);
})