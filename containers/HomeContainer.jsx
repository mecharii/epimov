import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Section from "@/components/Section";

const HomeContainer = ({ homeInfo }) => {
  return (
    <div>
      <Banner bannerInfo={homeInfo[3]} />
      <Categories />

      <Section sectionTitle="Popüler Filmler" movies={homeInfo.slice(0, 6)} />
      <Section sectionTitle="Popüler Diziler" movies={homeInfo.slice(6, 12)} />
      <Section
        sectionTitle="Popüler Animeler"
        movies={homeInfo.slice(12, 18)}
      />
    </div>
  );
};

export default HomeContainer;
