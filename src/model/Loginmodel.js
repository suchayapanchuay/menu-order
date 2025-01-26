import { useEffect,useState } from 'react'
function Loginmodel () {
          const [setValue] = useState('')
          useEffect(() => {
            setValue(localStorage.getItem('email'))
          })
}
export default Loginmodel
