export function preloading(imageArray:string[]) {
    imageArray.forEach((url) => {
      const image = new Image();
      image.src = url;
    });
  }