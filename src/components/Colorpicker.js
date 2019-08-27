import React, { useState } from 'react'

const Colorpicker = () => {
  const [Hue, setHue] = useState(0)
  const [Saturation, setSaturation] = useState(0)
  const [Lightness, setLightness] = useState(0)
  const [Color, setColor] = useState(0)
  return (
    <div className="slider">
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
        className="displayColor"
        style={{
          backgroundColor: `Hsl(${Hue}, ${Saturation}%, ${Lightness}%)`
        }}
      ></div>
    </div>
  )
}

export default Colorpicker
