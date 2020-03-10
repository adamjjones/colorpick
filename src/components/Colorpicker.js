import React, { useState, useEffect } from 'react'

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
  useEffect(() => {
    setRandomColor()
  }, [])

  return (
    <div id="container">
      <h1> HSL Color Picker</h1>
      <div className="right">

        <div
          className="displayColor"
          value="50"
          style={{
            backgroundColor: `Hsl(${Hue}, ${Saturation}%, ${Lightness}%, ${Alpha}%)`
          }}>
          <button onClick={setRandomColor}>Random color</button>
        </div>
      </div>
      <div className="slider">
        <input
          max="360"
          type="range"
          onChange={hue => {
            setHue(hue.target.value)
          }}
        />
        <p className="description">{'Hue: ' + `${Hue}`}</p>

        <input
          type="range"
          onChange={saturation => {
            setSaturation(saturation.target.value)
          }}
        />
        <p className="description">{'Saturation: ' + `${Saturation}`}</p>

        <input
          type="range"
          onChange={lightness => {
            setLightness(lightness.target.value)
          }}
        />
        <p className="description">{'Lightness: ' + `${Lightness}`}</p>

        <input
          type="range"
          onChange={alpha => {
            setAlpha(alpha.target.value)
          }}
        />
        <p className="description">{'Alpha: ' + `${Alpha}`}</p>

        <p>HSLA: ({Hue}, {Saturation}%, {Lightness}%, {Alpha}%)</p>
      </div>
    </div>
  )
}

export default Colorpicker
