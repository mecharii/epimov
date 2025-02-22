const MediaPlayer = ({ playerInfo }) => {
  const {
    title,
    release_date,
    time,
    category1,
    category2,
    imdb_score,
    country,
    video_path,
  } = playerInfo;

  return (
    <section className="max-w-screen-xl mx-auto w-full grid grid-cols-12 items-center justify-between px-2 lg:space-x-6">
      {/* <video className="w-full h-full rounded-lg col-span-12 lg:col-span-8" controls>
                <source src="/assets/videos/test.mp4" type="video/mp4" />
                Tarayıcınız Videoyu Desteklemiyor
            </video> */}
      <iframe
        height={500}
        src={`https://www.youtube.com/embed/${video_path}`}
        className="w-full col-span-12 lg:col-span-8 rounded-lg"
        title="İncir Reçeli 2 - Fragman"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <div className="col-span-12 lg:col-span-4 w-full lg:w-auto h-full grid grid-cols-2 gap-x-32 mx-auto rounded-lg bg-slate-950 p-5 mt-10 lg:mt-0">
        <div className="grid gap-4">
          <span>Film Adı :</span>
          <span>Kategoriler :</span>
          <span>Ülke :</span>
          <span>Süre : </span>
          <span>IMDB Puanı :</span>
          <span>Çıkış Tarihi :</span>
        </div>
        <div className="grid gap-4 font-bold">
          <span>{title || "Belirtilmemeiş"}</span>
          <span>
            {category1 || "Belirtilmemeiş"} , {category2 || "Belirtilmemeiş"}
          </span>
          <span>{country || "Belirtilmemeiş"}</span>
          <span>{time || "Belirtilmemeiş"} Saat</span>
          <span>{imdb_score || "Belirtilmemeiş"}</span>
          <span>{release_date || "Belirtilmemeiş"}</span>
        </div>
      </div>
    </section>
  );
};

export default MediaPlayer;
