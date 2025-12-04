import type { Article } from "@/types";
import ArticleCard from "../ArticleCard.astro";

const Articles = (props: { articles: Article[] }) => {
  // const articles = useStore(news);
  // const filterValue = useStore(filter);

  // useEffect(() => {
  //   (async () => {
  //     const res = await getAllPosts(
  //       10,
  //       filterValue.type === "ALL"
  //         ? undefined
  //         : filterValue.type == "FOLDER"
  //         ? "FOLDER"
  //         : "NEWS"
  //     );
  //     console.log({
  //       res,
  //     });
  //     setNews(res);
  //   })();
  // }, [filterValue.type]);

  return (
    <>
      {[...props.articles].map((article) => (
        <ArticleCard article={article} />
      ))}
    </>
  );
};

export default Articles;
