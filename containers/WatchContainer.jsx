import Banner from "@/components/Banner";
import MediaPlayer from "@/components/MediaPlayer";
import Cats from "@/components/Cats";
import Comments from "@/components/Comments";

const WatchContainer = ({ watchInfo }) => {
  return (
    <>
      <Banner bannerInfo={watchInfo} />
      <MediaPlayer playerInfo={watchInfo} />
      <section className="md:flex max-w-screen-xl mx-auto px-2 justify-between items-start">
        <Cats />
        <Comments movieId={watchInfo.id} />
      </section>
    </>
  );
};

export default WatchContainer;
