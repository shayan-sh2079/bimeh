const DATA = [
  {
    title: "شرکت بیمه گر",
    text: "پارسیان",
  },
  {
    title: "برند خودرو",
    text: "پژو",
  },
  {
    title: "مدل خودرو",
    text: "206 تیپ 6",
  },
];

const InsuranceTextsPairs = () => {
  return (
    <div className={"flex w-full flex-col gap-1"}>
      {DATA.map((pair) => (
        <div className={"flex items-center gap-1.5"} key={pair.title}>
          <p className={"text-grey-900 text-sm"}>{pair.title}</p>
          <hr className={"border-grey-border grow border-dashed"} />
          <p className={"text-sm"}>{pair.text}</p>
        </div>
      ))}
    </div>
  );
};

export default InsuranceTextsPairs;
