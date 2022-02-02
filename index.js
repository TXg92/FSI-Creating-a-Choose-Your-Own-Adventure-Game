let firstAnswer = window.prompt("Do you head left or right?");
// console.log("answer ", answer); // good for debugging!left
if (firstAnswer === "left") {
  let secondAnswer = window.prompt(
    "You come across a stray cat.It scampers off down a small hole; just large enough for you to crawl through. Do you follow it, or continue on your path?"
  );
  if (secondAnswer === "Follow") {
    let thirdAnswer = window.prompt(
      "You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven."
    );
    if (thirdAnswer === "Stay") {
      let fourthAnswer = window.prompt(
        "You live happily amongst the cats for the rest of your days."
      );
    } else if (thirdAnswer === "Spread the word") {
      let fourthAnswer = window.prompt(
        "After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless."
      );
    }
  }
} else if (firstAnswer === "right") {
  let secondAnswer = window.prompt(
    "You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which do you take?"
  );
  // secondAnswer = Away from dragon

  if (secondAnswer === "Past the dragon") {
    let thirdAnswer = window.prompt(
      "The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:"
    );

    if (thirdAnswer === "Stay") {
      let fourthAnswer = window.prompt(
        "You and the dragon have an uplifting conversation about local politics and become lifelong friends."
      );
    } else if (thirdAnswer === "Run") {
      let fourthAnswer = window.prompt(
        "Quickly, you run back to the cave's entrance. Sheepish, you return home."
      );
    }
  } else if (secondAnswer === "Away from dragon") {\
     let thirdAnswer = window.prompt(After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?)
  }
}
if (thirdAnswer === "eat him") {
  let thirdAnswer = window.prompt("you are now full");
} else if (thirdAnswer === "run") {
}
