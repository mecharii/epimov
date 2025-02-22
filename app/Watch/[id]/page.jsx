import WatchContainer from "@/containers/WatchContainer";
import { getAllData } from "@/utils/helpers/Datafetcher";

export const revalidate = 3600;
// export const dynamic = 'force-dynamic'

const WatchPage = async ({ params }) => {
  const fsData = await getAllData();
  const watch = fsData.find((movie) => movie.id === params.id);

  return (
    <>
      <WatchContainer watchInfo={watch} />
    </>
  );
};

export default WatchPage;
