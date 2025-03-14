import ClosingCountdown from '../../ClosingCountdown';

function SwiperSlider() {
  return (
    <div className="relative bg-white">
      <div className="flex flex-wrap items-center justify-center gap-4 py-16">
        <div className="mx-auto max-w-xs rounded-xl border border-gray-600 bg-white p-6 text-center shadow-lg">
          <h1 className="text-xl font-bold text-gray-800">We Serve and Deliver Delectable</h1>
          <p className="mt-2 text-sm text-gray-600">
            From sunrise breakfasts to late-night cravings, our doors are open to bring you the
            finest flavors, crafted with love and care. Whether you are dining in or ordering out,
            we promise a delightful experience every time.
          </p>
          <p className="mt-4 text-sm text-gray-500">What are the restaurant operating hours?</p>
          <div className="mt-4 text-2xl font-semibold text-red-600">
            <ClosingCountdown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwiperSlider;
