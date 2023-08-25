import Script from "next/script";

var Paddle: any;

export function PaddleLoader() {
  return (
    <Script
      src="https://cdn.paddle.com/paddle/paddle.js"
      onLoad={() => {
        Paddle.Setup({
          vendor: Number(102023),
        });
      }}
    />
  );
}

export default PaddleLoader;
