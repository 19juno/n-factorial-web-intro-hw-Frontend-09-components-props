import { articles, icon, avatar } from "../../data";
import Article from "./article";

export default function Body() {
  // console.log(articles);
  return (
    <div className="">
      {articles.map((article, index) => (
        <Article key={index} item={article} icon={icon} avatar={avatar} />
      ))}
    </div>
  );
}
