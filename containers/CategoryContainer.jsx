import Categories from "@/components/Categories";
import Section from "@/components/Section";

const CategoryContainer = ({ categoryName, sectionTitle }) => {
  return (
    <div>
      <Categories />
      <Section sectionTitle={sectionTitle} movies={categoryName} />
    </div>
  );
};

export default CategoryContainer;
