"use client";
import { useLocaleStore } from "@/stores/useLocaleStore";
const InfiniteCarousel = () => {
  const { locale } = useLocaleStore();
  return (
    <div className="carousel">
      <style>
        {`.carousel {
          width: 90%;
          margin: 100px auto;
          border: 2px solid #ccc;
          overflow-x: auto;
          display: flex;
          }
          .carousel::-webkit-scrollbar {
            display: none;
          }
          .carousel:hover {
            animation-play-state: paused;
          }
          .card {
            color: #0a0a0a;
            height: 150px;
            background-color: #f0f0f0;
            display: inline-block;
            text-align: center;
            line-height: 150px;
            font-size: 24px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            flex: 0 0 6em;
          }
          .group {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1em;
            animation: infiniteCarousel 5s linear infinite;
            padding-right: 1em;
            animation-play-state: inherit;
          }
          @keyframes infiniteCarousel {
            from {
              translate: 0;
            }
            to {
              translate: ${locale === "ar" ? "100%" : "-100%"};
            }
          }
          `}
      </style>
      <div className="group">
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
        <div className="card">4</div>
        <div className="card">5</div>
        <div className="card">6</div>
        <div className="card">7</div>
        <div className="card">8</div>
        <div className="card">9</div>
        <div className="card">10</div>
      </div>
      <div aria-hidden className="group">
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
        <div className="card">4</div>
        <div className="card">5</div>
        <div className="card">6</div>
        <div className="card">7</div>
        <div className="card">8</div>
        <div className="card">9</div>
        <div className="card">10</div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
