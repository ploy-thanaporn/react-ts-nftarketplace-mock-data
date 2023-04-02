import "./artist-ani.css";
import { artistData } from "../../../../data/Artist";
import { Link } from "react-router-dom";

const ArtistAniation = () => {
  return (
    <div>
      <section className="slide-option">
        <div id="infinite" className="artist-slider ltr">
          <div className="container-artist-animation">
            <ul className="artist-lane">
              {artistData.map((item) => (
                <li className="artist-box" key={item.id}>
                  <div className="min-w-fit h-[40px] my-2 mx-4">
                    <div className="flex items-center bg-white shadow-md rounded-full py-1">
                      <div className="mx-1">
                        <img
                          src={item.imgUrl}
                          alt=""
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      </div>

                      <span className="text-14 font-bold pl-1 pr-3">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="slide-option mt-8">
        <div id="infinite" className="artist-slider rtl">
          <div className="container-artist-animation">
            <ul className="artist-lane">
              {artistData.map((item) => (
                <Link to={`collected/collection-list/${item.id}`} key={item.id}>
                  <li className="artist-box" key={item.id}>
                    <div className="min-w-fit h-[40px] my-2 mx-4">
                      <div className="flex items-center bg-white shadow-md rounded-full py-1">
                        <div className="mx-1">
                          <img
                            src={item.imgUrl}
                            alt=""
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        </div>

                        <span className="text-14 font-bold pl-1 pr-3">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtistAniation;
