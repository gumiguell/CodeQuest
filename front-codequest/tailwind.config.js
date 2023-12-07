/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "white": "#fff",
        "fuchsia": {
          "100": "#db00ff",
          "200": "#cb02e3"
        },
        "gainsboro": {
          "100": "#e4e4e4",
          "200": "#e1e1e1"
        },
        "darkorchid": {
          "100": "#a32dda",
          "200": "#ab01bf"
        },
        "mediumblue": {
          "100": "#3940f0",
          "200": "#3f10ba"
        },
        "midnightblue": "#2d0159",
        "indigo": "#5833bb",
        "darkblue": "rgba(14, 7, 157, 0)",
        "gray": "rgba(0, 0, 0, 0.7)",
        "paleturquoise": "#bffef4",
        "blueviolet": {
          "100": "#632cf2",
          "200": "#5f2de1",
          "300": "#6700ce"
        },
        "purple": {
          "100": "#862c8d",
          "200": "rgba(134, 44, 141, 0)"
        },
        "mediumslateblue": "#004fea",
        "blue": "#5200ff"
      },
      "spacing": {},
      "fontFamily": {
        "tt-mussels-trl": "'TT Mussels Trl'",
        "inherit": "inherit"
      },
      "borderRadius": {
        "31xl": "50px",
        "18xl": "37px",
        "xl": "20px",
        "107xl": "126px",
        "39xl": "58px",
        "mini": "15px",
        "81xl": "100px"
      }
    },
    "fontSize": {
      "21xl": "2.5rem",
      "9xl": "1.75rem",
      "41xl": "3.75rem",
      "131xl": "9.38rem",
      "31xl": "3.13rem",
      "16xl": "2.19rem",
      "81xl": "6.25rem",
      "6xl": "1.56rem",
      "11xl": "1.88rem",
      "51xl": "4.38rem",
      "inherit": "inherit"
    },
    "screens": {
      "lg": {
        "max": "1200px"
      }
    }
  },
  "corePlugins": {
    "preflight": false
  }
}