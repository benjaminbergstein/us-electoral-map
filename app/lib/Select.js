import React, { useRef } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Select = ({
  value,
  onChange,
  options,
  maxWidth = 200
}) => {
  const selectRef = useRef(null)

  return <div style={{ position: 'relative', border: '1px solid lightgray', padding: '10px', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
    <span style={{ whiteSpace:  'nowrap', textOverflow: 'ellipsis', maxWidth: `${maxWidth}px`, overflow: 'hidden' }}>
      {value}
    </span>
    <FaChevronDown style={{ marginLeft: '10px' }} />
    <select
      value={value}
      ref={selectRef}
      onChange={() => { onChange(selectRef.current.value) }}
      style={{ opacity: 0, position: 'absolute', top: 0, left: '10px', width: '100%', height: '100%' }}
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </div>
}

export default Select
