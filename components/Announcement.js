import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Announcement = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-transparent z-10 relative">
      <hr className="mx-auto max-w-3xl border-t border-gray-300 mt-20 mb-16" />
      <div className="text-center mt-7">
        <h1 className="text-4xl font-bold text-white md:mb-4">Announcements</h1>
      </div>

      <div className="slider-container max-w-screen-lg mx-auto">
        <Slider {...sliderSettings}>
          {/* Slide 1 */}
          <div>
            <div className="max-w-sm w-full lg:max-w-full lg:flex h-96">
              <div className="h-48 lg:h-auto lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                <img className="w-full h-full object-cover" src="/images/iedc.png" alt="image" />
              </div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">Announcement 1</div>
                  <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Praesent vitae risus malesuada, faucibus est non, iaculis arcu. Nam eu ante sed dolor tempus tempor at ac nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis nunc, tincidunt nec nunc mattis, ullamcorper posuere dolor. Curabitur et ipsum a augue facilisis pulvinar et in enim. Duis laoreet molestie nunc ac placerat. Etiam quis elit laoreet, blandit elit ac, venenatis lacus.</p>
                </div>
                <div className="flex items-center">
                  
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div>
            <div className="max-w-sm w-full lg:max-w-full lg:flex h-96">
              <div className="h-48 lg:h-auto lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                <img className="w-full h-full object-cover" src="/images/iedc.png" alt="image" />
              </div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">Announcement 1</div>
                  <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Praesent vitae risus malesuada, faucibus est non, iaculis arcu. Nam eu ante sed dolor tempus tempor at ac nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis nunc, tincidunt nec nunc mattis, ullamcorper posuere dolor. Curabitur et ipsum a augue facilisis pulvinar et in enim. Duis laoreet molestie nunc ac placerat. Etiam quis elit laoreet, blandit elit ac, venenatis lacus.</p>
                </div>
                <div className="flex items-center">
                  
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div>
            <div className="max-w-sm w-full lg:max-w-full lg:flex h-96">
              <div className="h-48 lg:h-auto lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                <img className="w-full h-full object-cover" src="/images/iedc.png" alt="image" />
              </div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">Announcement 1</div>
                  <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Praesent vitae risus malesuada, faucibus est non, iaculis arcu. Nam eu ante sed dolor tempus tempor at ac nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis nunc, tincidunt nec nunc mattis, ullamcorper posuere dolor. Curabitur et ipsum a augue facilisis pulvinar et in enim. Duis laoreet molestie nunc ac placerat. Etiam quis elit laoreet, blandit elit ac, venenatis lacus.</p>
                </div>
                <div className="flex items-center">
                  
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Announcement;
