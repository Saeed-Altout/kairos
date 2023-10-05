import Image from "next/image";

const UserCard = ({ data }) => {
  return (
    <div className="flex-center flex-col">
      <Image
        src={data.imgUrl}
        alt={data.name}
        className="rounded-full h-16 w-16"
      />
      <p className="pargraph text-gray-800 text-center mt-5 mb-2">
        {data.description}
      </p>
      <p className="text-secondary">
        {data.name} <span className="text-priamry">{data.tag}</span>
      </p>
    </div>
  );
};

export default UserCard;
