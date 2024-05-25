import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tags';

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
            <ButtonText title="Excluir nota"/>
          <h1>Introduçao ao React</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia enim omnis veniam laudantium, eum cum ea corrupti commodi maiores doloribus ipsa cumque voluptatibus hic necessitatibus dignissimos sapiente beatae libero. Quasi.</p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>

          </Section>

          <Button title="Voltar" />
          </Content>
      </main>
    </Container>
  )
};