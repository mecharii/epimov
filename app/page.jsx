import HomeContainer from "@/containers/HomeContainer";
import { getAllData } from "@/utils/helpers/Datafetcher";

export const revalidate = 3600;
// export const dynamic = 'force-dynamic'

const HomePage = async () => {
  const fsData = await getAllData();

  return (
    <>
      <HomeContainer homeInfo={fsData} />
    </>
  );
};

export default HomePage;
