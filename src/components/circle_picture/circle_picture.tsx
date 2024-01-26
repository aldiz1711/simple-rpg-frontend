const CirclePicture = ({ src, alt }: { src: any; alt: any }) => {
  return (
    <div className="relative">
      <div className="relative rounded-full overflow-hidden w-14 h-14">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-full border-2 border-black"
        />
      </div>
    </div>
  );
};

export default CirclePicture;
