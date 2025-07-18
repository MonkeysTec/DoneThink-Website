export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="157pt"
      height="171pt"
      viewBox="0 0 157 171"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M 60.109 37.653 C 45.009 40.953 28.209 52.853 19.809 66.153 C -3.791 103.353 13.409 153.353 54.509 166.853 C 61.209 169.053 64.309 169.453 74.009 169.453 C 84.109 169.453 86.609 169.153 94.009 166.653 C 104.409 163.053 115.109 156.053 122.509 147.853 C 129.009 140.653 136.109 126.953 138.409 117.153 C 140.209 109.753 140.509 99.553 139.009 98.653 C 137.609 97.753 124.209 105.053 123.609 107.053 C 123.409 107.953 122.609 111.153 122.009 114.153 C 119.309 126.353 110.109 139.353 99.409 146.153 C 85.409 154.953 65.109 155.553 51.109 147.453 C 35.609 138.453 26.009 121.753 26.009 103.753 C 26.009 88.453 30.309 77.853 41.009 67.053 C 53.009 54.953 68.909 49.953 85.309 53.253 C 90.809 54.353 90.909 54.353 93.409 51.553 C 94.909 49.953 97.009 47.153 98.109 45.353 C 100.009 42.453 100.109 41.753 98.809 40.553 C 94.909 36.653 72.509 35.053 60.109 37.653 Z"
        fill="transparent"
        stroke="#33fda9"
        stroke-width="2"
        stroke-dasharray="1000"
        stroke-dashoffset="1000"
      >
        <animate
          id="circleFill"
          attributeName="stroke-dashoffset"
          from="1000"
          to="0"
          dur="2s"
          fill="freeze"
        />
        <animate
          attributeName="fill"
          from="transparent"
          to="#33fda9"
          begin="1s"
          dur="0.5s"
          fill="freeze"
        />
      </path>

      <path
        d="M 128.309 19.753 C 120.709 30.053 107.309 48.153 98.509 60.053 C 89.609 71.953 78.909 86.553 74.609 92.453 C 70.209 98.453 66.009 103.553 65.209 103.853 C 64.309 104.253 61.909 102.353 58.709 98.753 C 52.209 91.653 48.109 90.553 43.309 94.553 C 38.509 98.553 38.509 101.353 43.309 107.453 C 54.409 121.453 66.409 135.753 68.009 136.953 C 71.409 139.453 74.709 137.353 80.509 129.053 C 90.009 115.653 94.609 112.253 133.809 89.253 C 144.009 83.153 146.009 81.653 146.009 79.653 C 146.009 75.953 143.209 75.153 130.109 75.153 C 123.409 75.153 118.009 74.753 118.009 74.253 C 118.009 73.853 120.709 67.453 124.109 60.053 C 127.409 52.653 134.309 37.253 139.209 25.753 C 148.709 3.953 149.109 2.053 144.209 1.353 C 142.409 1.053 139.509 4.453 128.309 19.753 Z"
        fill="#33fda9"
        opacity="0"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 -30"
          to="0 0"
          begin="circleFill.end"
          dur="0.6s"
          fill="freeze"
        />
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          begin="circleFill.end"
          dur="0.6s"
          fill="freeze"
        />
      </path>
    </svg>
  );
}
