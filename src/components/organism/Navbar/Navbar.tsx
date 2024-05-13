import { NavbarBody } from '@/components/Organism/Navbar/style';
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
