export const updateFavicon = ({ theme, mode, size = 32, curveSize = 14 }) => {
  const favIcon = document.getElementById('app-favicon')
  const bgColor = theme[mode].bg
  const textColor = theme[mode].color
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size

  let context = canvas.getContext('2d')
  context.beginPath()
  context.moveTo(0, curveSize)

  context.quadraticCurveTo(0, 0, curveSize, 0)
  context.lineTo(size - curveSize, 0)

  context.quadraticCurveTo(size, 0, size, curveSize)
  context.lineTo(size, size - curveSize)
  context.quadraticCurveTo(size, size, size - curveSize, size)
  context.lineTo(curveSize, size)
  context.quadraticCurveTo(0, size, 0, size - curveSize)
  context.fillStyle = bgColor
  context.fill()
  context.font = `italic 900 ${size / 2}px "Epilogue"`
  context.textAlign = 'center'
  context.fillStyle = textColor
  context.fillText('HT', size / 2, (size / 3) * 2.1)

  favIcon.setAttribute('href', canvas.toDataURL('image/png'))
}
