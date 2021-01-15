import Checkbox from './checkbox'

function baseStyleControl(props) {
  const { control } = Checkbox.baseStyle(props)

  return {
    ...control,
    _checked: {
      ...control['_checked'],
    },
  }
}

const baseStyle = (props) => ({
  label: Checkbox.baseStyle(props).label,
  control: baseStyleControl(props),
})

export default {
  baseStyle,
}
