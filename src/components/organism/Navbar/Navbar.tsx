import { NavbarBody } from '@/components/organism/Navbar/style';
import { ActiveLink } from '@/components/atoms/ActiveLink/ActiveLink';

const Navbar = () => {
  return (
    <NavbarBody>
      <div className={'PageActions'}>
        <ActiveLink activeClassName={'active'} href={'/'}>
          <p>Home</p>
        </ActiveLink>
        <ActiveLink activeClassName={'active'} href={'/new-char'}>
          <p>Create new character</p>
        </ActiveLink>
        <ActiveLink activeClassName={'active'} href={'/database'}>
          <p>Character database</p>
        </ActiveLink>
        <ActiveLink activeClassName={'active'} href={'/god-hand'}>
          <p>God Hand</p>
        </ActiveLink>
        <ActiveLink activeClassName={'active'} href={'/tesouros'}>
          <p>Tesouros</p>
        </ActiveLink>
      </div>
      <div className={'LoginAction'}>
        <ActiveLink activeClassName={'active'} href={'/login'}>
          <p>Login</p>
        </ActiveLink>
      </div>
    </NavbarBody>
  );
};

export default Navbar;
