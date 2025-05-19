import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";

const ClientsSection = () => {
  const clientAvatars = [
    { id: 1, src: client1, alt: "Client 1" },
    { id: 2, src: client2, alt: "Client 2" },
    { id: 3, src: client3, alt: "Client 3" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-orange_bg text-orange px-6 py-2 rounded-full text-sm font-semibold  mb-4">
            Clients
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark mb-3">
            our clients
          </h2>
          <p className="text-lg sm:text-xl text-gray max-w-2xl mx-auto">
            Trusted by individuals and families across India for reliable care
            and support.
          </p>
        </div>

        {/* Happy Clients Card */}
        <div className="mx-auto border  border-gray-300 rounded-full p-3 sm:p-4 w-fit">
          <div className="flex items-center justify-between space-x-2 sm:space-x-4 ">
            {/* Stacked Avatars */}
            <div className="flex -space-x-4 sm:-space-x-5 pr-10">
              {clientAvatars.map((avatar, index) => (
                <img
                  key={avatar.id}
                  src={avatar.src}
                  alt={avatar.alt}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white shadow-md"
                  style={{ zIndex: clientAvatars.length + index }}
                />
              ))}
              <button className="w-12 h-12 sm:w-16 sm:h-16 bg-black z-10 rounded-full cursor-pointer text-white text-4xl">
                +
              </button>
            </div>

            <div className="text-left sm:text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                500+
              </p>
              <p className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                happy clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
