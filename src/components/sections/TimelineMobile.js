import { resume } from '@/data/resume';

const SingleTimeLine = ({ id, job_title, content, company, timeline }) => {
  return (
    <>
      <div className=" relative col-span-1 w-full h-full flex justify-center items-center">
        <div
          className={`${id === 3 ? '' : 'h-full'}  w-[1px] bg-darkGray`}
        ></div>
        <div className="absolute top-0 w-[30px] h-[30px] rounded-full bg-brandYellow z-10 flex items-center justify-center"></div>
      </div>

      <div className="col-span-5 w-full h-full">
        <div className="w-full h-full pb-10 text-darkGray">
          <h2 className="uppercase text-xl  font-bold">{job_title}</h2>
          <p className="text-sm font-medium my-1 capitalize">{company}</p>
          <span className="text-xs capitalize">{timeline}</span>

          <ul className="mt-3">
            {content.map((item) => (
              <li
                className="mb-3 text-base text-darkGray list-disc "
                key={item.id}
              >
                {item.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const TimeLineMobile = () => {
  return (
    <div className="mt-8 grid grid-cols-6 lg:hidden">
      {resume.map((item) => (
        <SingleTimeLine key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TimeLineMobile;
