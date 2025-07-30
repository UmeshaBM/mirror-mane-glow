const WhatsAppButton = () => {
  const phoneNumber = "1234567890"; // Replace with actual WhatsApp number
  const message =
    "Hi! I'd like to book an appointment at Mirror & Mane. Could you please help me with available slots?";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white  rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 float">
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          width="50"
        />
      </div>
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat on WhatsApp
      </div>
    </a>
  );
};

export default WhatsAppButton;
