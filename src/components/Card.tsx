export interface Props {
  title: string;
  subtitle: string;
  description: React.ReactNode;
  imgUrl: string;
}

const Card = (props: Props) => {
  return (
    <section className="h-[500px] w-[300px] bg-[#e6e6e6] border border-[#c0c0c0] rounded-2xl gap-7 hover:scale-110 transition-all ease-in-out relative">
      <img
        src={"https://picsum.photos/300/200"}
        alt=""
        className="rounded-t-2xl"
      />
      <div className="flex flex-col gap-3 px-3 pt-4">
        <h3 className="md:text-2xl text-lg montserrat-semibold text-[#e61d1d]">
          {props.title}
        </h3>
        <h5 className="montserrat-regular">{props.subtitle}</h5>
        <div
          className="text-[14px] montserrat-regular"
          //@ts-ignore
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
        <button className="w-[120px] py-3 bg-[#d35400] rounded-2xl montserrat-regular absolute left-5 bottom-5">
          View More
        </button>
      </div>
    </section>
  );
};

export default Card;
