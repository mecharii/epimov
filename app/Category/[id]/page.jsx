import CategoryContainer from "@/containers/CategoryContainer";
import { getAllData } from "@/utils/helpers/Datafetcher";

export const revalidate = 3600;

const CategoryPage = async ({ params }) => {
  const fsData = await getAllData();

  const filteredMovies = fsData.filter(
    (movie) =>
      movie.type.toLowerCase() === params.id.toLowerCase() ||
      movie.category1.toLowerCase() === params.id.toLowerCase() ||
      movie.category2.toLowerCase() === params.id.toLowerCase()
  );

  return (
    <CategoryContainer
      sectionTitle={`${params.id} İçerikleri`}
      categoryName={filteredMovies}
    />
  );
};

export default CategoryPage;
