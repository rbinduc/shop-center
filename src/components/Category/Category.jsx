import { Link } from "react-router-dom";
import Image from "../Image";

const Category = ({ id, name, image }) => (
  <article className="w-1/2 md:w-4/12 lg:w-3/12 p-2">
    <Link
      to={`/categories/${id}`}
      className="h-52 sm:h-64 md:h-80 lg:h-96 block relative group"
    >
      <Image src={image} alt={name} />
      <div className="transition ease-in-out duration-500 uppercase font-semibold text-3xl text-white grid place-items-center absolute left-0 top-0 bg-black/[0.6] w-full h-full zIndex-1 invisible group-hover:visible">
        {name}
      </div>
    </Link>
  </article>
);

export default Category;
