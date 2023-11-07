interface TitleProps {
  mainTitle: string;
  subTitle?: string;
}

export default function Title({ mainTitle, subTitle }: TitleProps) {
  return (
    <div className="text-center w-full">
      {subTitle && <span className="text-sm pb-1 block">{subTitle}</span>}
      <h3 className="text-lg relative">
        {mainTitle}
        <i className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -z-10">
          <img src="/images/marker.svg" alt="마커" />
        </i>
      </h3>
    </div>
  );
}
