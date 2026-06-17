import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";

kaplay(); // Initiallize the game engine

setGravity(163 * 9.8); // Set the default gravity

document.getElementById("gravity").addEventListener("input", (event) => {
    const gravityValue = event.target.value;
    setGravity(163 * gravityValue);
}); // Custom gravity

const ball = add(
    [
        circle(50),
        pos(650, 150),
        color(50, 50, 50),
        area(),
        body({ bouncePower: 600 })
    ]
); // Add a ball

const floor = add(
    [
        rect(width(), 100),
        pos(0, 500),
        color(50, 50, 50),
        area(),
        body({ isStatic: true }),
        "floor"
    ]
); // Add a floor

onKeyPress((key) => {
    debug.log(key);
})

let jumpForceValue = 5;

document.getElementById("jumpForce").addEventListener("input", (event) => {
    jumpForceValue = event.target.value;
});

onKeyPress((space) => {
    ball.jump(jumpForceValue * 200);
    ball.bouncePower = jumpForceValue * 250;
}) // Custom Jump Force

ball.bouncePower = 1500;

document.getElementById("elasticity").addEventListener("input", (event) => {
    const elasticityValue = event.target.value;
    ball.bouncePower = 300 * elasticityValue;
});

ball.onCollide("floor", () => {
    ball.jump(0.6 * (ball.bouncePower))
    if (ball.jump) {
        ball.bouncePower *= 0.7;
    }
}) // Custom Elasticity

let isDragging = false

ball.onClick(() => {
    isDragging = true
})

onMouseRelease(() => {
    isDragging = false
})

onUpdate(() => {
    if (isDragging) {
        ball.moveTo(mousePos())
        ball.isStatic = true
        setGravity(0)
    } else {
        setGravity(document.getElementById("gravity").value * 163)
        ball.isStatic = false
    }
})