import Navigation from "@/components/Link";
import Genres from "@/mocks/genres";

const Categories = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-1 md:gap-3 items-center max-w-screen-xl mx-auto px-2 mb-10">
      {Genres.map((category, index) => (
        <Navigation
          key={index}
          navLinks={[
            {
              name: category.name,
              href: `/Category/${category.name}`,
              active: "text-white border-red-600",
              ınActive: "text-slate-300",
              style:
                "bg-black py-2 md:py-5 md:px-12 text-center md:text-xl text-sm font-medium rounded-lg border border-gray-700 hover:text-white hover:border-red-600",
            },
          ]}
        />
      ))}
    </div>
  );
};

export default Categories;
