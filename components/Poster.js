"use client";

const Poster = (props) => {
  const { poster } = props;

  return (
    <div>
      <div className="flex items-center justify-center pt-10">
        <div>
          <img
            className="rounded-full"
            src={poster.image}
            width={40}
            height={40}
            alt=""
          />
          <h1 className="text-lg font-[700] ">{poster.name}</h1>
          <p className="text-sm text-gray-400 font-[400]">{poster.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Poster;
