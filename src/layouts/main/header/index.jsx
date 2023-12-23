import Logo from "./logo"
import InputGroup from '../header/inputgroup';

function Header() {
  return (
    <header className="px-[40px] h-[80px] flex items-center justify-center gap-12">
      <Logo/>
      <div className="flex flex-wrap justify-center border border-grey-500 rounded-2xl p-1">
        <InputGroup/>

      </div>
    </header>
  )
}

export default Header
