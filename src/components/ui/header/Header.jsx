import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
  return (
    <>
      <header className="bg-cyan-200 flex justify-end p-3 items-center relative">
        <GiHamburgerMenu />
      </header>
    </>
  );
}
