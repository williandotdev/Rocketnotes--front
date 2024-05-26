import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";
import { useAuth } from '../../hooks/auth';

export function Header(){
    const {signOut} = useAuth();
    return(
        <Container>
            <Profile to="/Profile">
                <img src="https://github.com/williandotdev.png" alt="Foto do Usuário" />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Willian Ferreira</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}