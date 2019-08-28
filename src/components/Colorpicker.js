import React, { useState, useEffect } from 'react'

// function randomColor() {
//   let random = Math.ceil(Math.random() * 255)
// }
const Colorpicker = () => {
  const [Hue, setHue] = useState(0)
  const [Saturation, setSaturation] = useState(0)
  const [Lightness, setLightness] = useState(50)
  const [Alpha, setAlpha] = useState(50)

  const setRandomColor = () => {
    setHue(Math.ceil(Math.random() * 360))
    setSaturation(Math.ceil(Math.random() * 100))
    setLightness(Math.ceil(Math.random() * 100))
  }

  return (
    <div id="container">
      <h1>Color Picker with Hooks</h1>
      <div className="slider">
        <input
          max="360"
          type="range"
          onChange={hue => {
            setHue(hue.target.value)
          }}
        />
        <p>{'Hue: ' + `${Hue}`}</p>

        <input
          type="range"
          onChange={saturation => {
            setSaturation(saturation.target.value)
          }}
        />
        <p>{'Saturation: ' + `${Saturation}`}</p>

        <input
          type="range"
          onChange={lightness => {
            setLightness(lightness.target.value)
          }}
        />
        <p>{'Lightness: ' + `${Lightness}`}</p>

        <input
          type="range"
          onChange={alpha => {
            setAlpha(alpha.target.value)
          }}
        />
        <p>{'Alpha: ' + `${Alpha}`}</p>

        <div
          onLoad={setRandomColor}
          className="displayColor"
          value="50"
          style={{
            backgroundColor: `Hsl(${Hue}, ${Saturation}%, ${Lightness}%, ${Alpha}%)`
          }}
        ></div>
      </div>
      <button onClick={setRandomColor}>Random color</button>
    </div>
  )
}

export default Colorpicker
