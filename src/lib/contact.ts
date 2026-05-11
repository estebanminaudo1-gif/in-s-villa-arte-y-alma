export const CONTACT = {
  phone: "3484205905",
  phoneDisplay: "+54 9 348 420 5905",
  email: "inesrey13@gmail.com",
  instagram: "https://instagram.com/",
  location: "Escobar, Buenos Aires, Argentina",
};

export const waLink = (msg: string) =>
  `https://wa.me/54${CONTACT.phone}?text=${encodeURIComponent(msg)}`;
