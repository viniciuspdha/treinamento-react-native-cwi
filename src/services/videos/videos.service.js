export const fetchVideoById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data.find((item) => item.id === id)), 1000);
  });
};

const data = [
  {
    id: "zmb01",
    imageUri:
      "https://www.incimages.com/uploaded_files/image/1920x1080/425A8015_Retouched_283406.jpg",
    title: "Zumba Class1",
    description: "Dancing School",
  },
  {
    id: "zmb02",
    imageUri:
      "https://www.incimages.com/uploaded_files/image/1920x1080/425A8015_Retouched_283406.jpg",
    title: "Zumba Class2",
    description: "Dancing School",
  },
  {
    id: "zmb03",
    imageUri:
      "https://www.incimages.com/uploaded_files/image/1920x1080/425A8015_Retouched_283406.jpg",
    title: "Zumba Class3",
    description: "Dancing School",
  },
  {
    id: "chl01",
    imageUri:
      "https://www.incimages.com/uploaded_files/image/1920x1080/425A8015_Retouched_283406.jpg",
    title: "Chill Vibes 1",
    description: "Dancing School",
  },
  {
    id: "chl02",
    imageUri:
      "https://www.incimages.com/uploaded_files/image/1920x1080/425A8015_Retouched_283406.jpg",
    title: "Chill Vibes 2",
    description: "Dancing School",
  },
  {
    id: "chl03",
    imageUri:
      "https://www.incimages.com/uploaded_files/image/1920x1080/425A8015_Retouched_283406.jpg",
    title: "Chill Vibes 3",
    description: "Dancing School",
  },
];
