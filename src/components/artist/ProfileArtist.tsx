import eth from "../../assets/collected/eth.svg";
import { SiDiscord, SiInstagram, SiTwitter } from "react-icons/si";
import { GrFacebookOption } from "react-icons/gr";
import { artistData } from "../../data/Artist";
import { useParams } from "react-router-dom";

const ProfileArtist = () => {
  const { idArtist } = useParams();
  const list = artistData.find((item) => item.id === Number(idArtist));

  return (
    <div className="relative">
      {/* cover */}
      <div className="w-full  z-0 h-[180px] md:h-[260px] lg:h-[487px] ">
        <img
          alt=""
          src={list?.coverImg}
          className="w-full h-full bg-200 object-cover"
        />
      </div>

      <div className="relative px-4 lg:px-8">
        <div className="relative flex justify-between lg:justify-start lg:flex-col">
          {/* profile */}
          <div className="relative mt-3 lg:z-10 lg:-mt-40">
            <img
              src={list?.imgUrl}
              alt=""
              className="object-cover w-[124px] h-[124px] md:w-[164px] md:h-[164px] lg:w-[224px] lg:h-[224px] 2xl:w-[280px] 2xl:h-[280px] rounded-full border-[6px] border-white shadow-trend"
            ></img>
          </div>

          {/* num of follower,following,collected */}
          <div className="flex flex-col lg:flex-row-reverse lg:justify-between mt-3 lg:absolute lg:mt-[117px] lg:w-full">
            <div className="flex text-center justify-end lg:h-20 lg:-mt-9 ">
              <div>
                <span className="text-16 md:text-23 lg:text-28 2xl:text-34 font-semibold text-neutral-800 cursor-default">
                  {/* {list?.follower?.toLocaleString()} */}
                  1,621
                </span>
                <p className="text-neutral-400 mt-[9px] text-10 md:text-12 lg:text-14 2xl:text-18 cursor-default">
                  Follower
                </p>
              </div>
              <div className="px-[14px] lg:px-[50px]">
                <span className="text-16 md:text-23 lg:text-28 2xl:text-34 font-semibold text-neutral-800 cursor-default">
                  {/* {list?.following?.toLocaleString()} */}
                  597
                </span>
                <p className="text-neutral-400 mt-[9px] text-10 md:text-12 lg:text-14 2xl:text-18 cursor-default">
                  Following
                </p>
              </div>
              <div>
                <span className="text-16 md:text-23 lg:text-28 2xl:text-34 font-semibold text-neutral-800 cursor-default">
                  {/* {list?.collected?.toLocaleString()} */}
                  16
                </span>
                <p className="text-neutral-400 mt-[9px] text-10 md:text-12 lg:text-14 2xl:text-18 cursor-default">
                  Collected
                </p>
              </div>
            </div>

            {/* line */}
            <div className="lg:hidden flex justify-end my-4">
              <div className="w-[131.5px] md:w-[145px] h-[1px] bg-neutral-50"></div>
            </div>

            <div className="flex 2xl:mt-[90px] 2xl:-ml-1">
              <div className="flex items-center text-neutral-500">
                <div className="flex flex-col lg:flex-row lg:items-center">
                  <div className="flex items-center justify-end">
                    <img
                      src={eth}
                      alt=""
                      className="w-4 h-4 md:w-6 md:h-6 lg:w-[30px] lg:h-[30px] 2xl:w-9 2xl:h-9"
                    />
                    <span className="lg:ml-[7px] lg:mr-2 text-10 md:text-12 lg:text-sm 2xl:text-18 w-20 md:w-44 truncate">
                      0xc7602EfF21e9da60cFe10318cEFD566271e14599
                    </span>
                  </div>
                  <div className="flex justify-end items-center text-10 md:text-12 my-2 lg:my-0 lg:text-sm lg:border-r-[1px] lg:h-[32.5px] lg:border-neutral-400">
                    <p className="lg:mr-4">
                      Joined February 2022
                      {/* {moment(user.createdAt).format("MMMM YYYY")} */}
                    </p>
                  </div>
                  <div className="flex items-center text-10 md:text-12 lg:text-14 lg:ml-4">
                    <p className="pr-3">Followed By</p>
                    <div className="flex mx-2">
                      {artistData
                        .map((item) => (
                          <img
                            key={item.id}
                            src={item.imgUrl}
                            alt=""
                            className="rounded-full w-4 h-4 md:w-6 md:h-6 lg:w-[30px] lg:h-[30px] -ml-3"
                          ></img>
                        ))
                        .slice(0, 4)}
                    </div>
                    <span>and 119+ People</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* name, detail  */}
        <div className="pt-4 flex justify-between">
          <div className="md:h-7 lg:h-[34px]">
            <div className="lg:pb-[13.25px]">
              <p className="text-19 md:text-23 lg:text-28 2xl:text-34">
                {list?.name}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full h-[90px] md:h-[92px] mt-2 lg:mt-6 2xl:mt-[66px]">
          <div className="flex-col w-full">
            <div className="absolute md:relative items-center h-[52px] text-12 md:text-14 lg:text-16 2xl:text-[22px] max-w-[360px] md:max-w-[750px] lg:h-[57px] lg:mt-[28px] 2xl:max-w-[1050px] text-neutral-800 cursor-default">
              {list?.bio}
            </div>
            <div className="flex md:items-center text-neutral-600 cursor-pointer mt-16 md:mt-0 lg:pt-0 lg:mt-0 h-8">
              <SiDiscord className="w-[13.33px] h-[13.33px] md:w-5 md:h-5 lg:w-[25px] lg:h-[25px] 2xl:w-8 2xl:h-8 mr-[21.07px] lg:mr-[34.5px]" />
              <SiInstagram className="w-[13.33px] h-[13.33px]  md:w-5 md:h-5 lg:w-[25px] lg:h-[25px] 2xl:w-8 2xl:h-8 mr-[21.07px] lg:mr-[34.5px]" />
              <GrFacebookOption className=" w-[13.33px] h-[13.33px] md:w-5 md:h-5 lg:w-[25px] lg:h-[25px] 2xl:w-8 2xl:h-8 mr-[21.07px] lg:mr-[34.5px]" />
              <SiTwitter className="w-[13.33px] h-[13.33px] md:w-5 md:h-5 lg:w-[25px] lg:h-[25px] 2xl:w-8 2xl:h-8" />
            </div>
          </div>
          <div className="flex items-end lg:items-start lg:pt-7">
            <div className="text-white lg: 2xl:-mt-[70px] items-start md:justify-end">
              <button className="bg-primary w-[133px] h-[32px] md:w-[200px] md:h-[45px] lg:w-[310px] lg:h-16 2xl:w-[320px] 2xl:h-20 rounded-[10px] text-12 md:text-14 lg:text-nav 2xl:text-18">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileArtist;
