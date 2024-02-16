import Icon from "./images/Icon.png";
import Image1 from "./images/Img.png";
import Image2 from "./images/Img2.png";
import Image3 from "./images/Img3.png";
import Image4 from "./images/Img4.png";

const articles = [
  {
    id: 1,
    title: "7 Practical CSS Tips",
    abstract:
      "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
    image: Image2,
  },
  {
    id: 2,
    title: "7 Practical CSS Tips",
    abstract:
      "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
    image: Image3,
  },
  {
    id: 3,
    title: "7 Practical CSS Tips",
    abstract:
      "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
    image: Image4,
  },
];

const icon = { icon: Icon };
const avatar = { avatar: Image1 };

export { icon, articles, avatar };
