import React, { useState } from 'react'

// function randomColor() {
//   let random = Math.ceil(Math.random() * 255)
// }

componentDidMount() {
  const Colorpicker = () => {
    const [Hue, setHue] = useState(0)
    const [Saturation, setSaturation] = useState(0)
    const [Lightness, setLightness] = useState(0)
    const [Color, setColor] = useState(0)
  
    const setRandomColor = () => {
      setHue(Math.ceil(Math.random() * 360))
      setSaturation(Math.ceil(Math.random() * 100))
      setLightness(Math.ceil(Math.random() * 100))
    }
  
}



  return (
    <div id="container">
      <div className="slider">
        <button onClick={setRandomColor}>Random color</button>
        <input
          max="255"
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

        <div
          onLoad={setRandomColor}
          className="displayColor"
          style={{
            backgroundColor: `Hsl(${Hue}, ${Saturation}%, ${Lightness}%)`
          }}
        ></div>
      </div>
    </div>
  )
}

export default Colorpicker
