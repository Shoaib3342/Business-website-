import client1 from "../assets/img/clients/client-1.png";
import client2 from "../assets/img/clients/client-2.png";
import client3 from "../assets/img/clients/client-3.png";
import client4 from "../assets/img/clients/client-4.png";
import client5 from "../assets/img/clients/client-5.png";
import client6 from "../assets/img/clients/client-6.png";

const Clients = () => {
  const clients = [client1, client2, client3, client4, client5, client6];

  return (
    <div className="py-[50px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
      {clients.map((client, index) => (
        <img
          key={index}
          className="w-[100px] h-[40px] filter grayscale brightness-100 contrast-0 hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition duration-300"
          src={client}
          alt={`Client ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Clients;
