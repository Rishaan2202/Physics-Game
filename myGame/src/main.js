import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";

kaplay();

document.getElementById("gravity").addEventListener("input", (event) => {
    const gravityValue = event.target.value;
    setGravity(163*gravityValue);
});

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
            body({ isStatic: true })
        ]
    );

onKeyPress((key) => {
    debug.log(key);
})

let jumpForceValue = 6;

    document.getElementById("jumpForce").addEventListener("input", (event) => {
        jumpForceValue = event.target.value;
    });

onKeyPress((space) => {
    ball.jump(jumpForceValue*100);
})
