import React from "react";
import { Image, Text } from "react-native";
import { useAuth } from "../../store/user";

import TeiaColorida from "./assets/teia_colorida.png"
import SpiderM from "./assets/spiderm.png"
import SpiderH from "./assets/spiderh.png"
import { Container, BoxSpiderM, BoxInfo, Info, BtnAvatar, BtnLogout, BtnInfo, BoxSpiderH, BoxTeia} from "./styles";

const Profile: React.FC = () => {
   const { user } = useAuth();
   const { signOut } = useAuth();


  return (
    <Container>
      <BoxSpiderM>
        <Image source={SpiderM} />
      </BoxSpiderM>

      <BoxInfo>
        <Info>
            Olá, {user.name}!{"\n"}
        </Info>

        <Info>
          Seja bem vindo a Teia de Retalhos Textuais.{"\n"}
        </Info>

        <Info>
          Aqui você vai ter uma rotina divertida de leitura com diversos tipos de textos.
        </Info>

        <Info>
          Você não estará sozinho nesta aventura, os irmãos aranha,
          Mariah e Enzo, irão te acompanhar até o final do desafio.{"\n"}
        </Info>

        <Info>
          Além de, ter desafios para enfrentar, metas para atingir e
          premiações de fichas, que você poderá trocar por acessórios do seu avatar.{"\n"}
        </Info>

        <Info>
          Vamos lá, {user.name}!{"\n"}
        </Info>

        <Info>
          Pronta para se aventurar?{"\n"}
        </Info>
      </BoxInfo>

      <BtnAvatar>
        <BtnInfo>Escolher Avatar</BtnInfo>
      </BtnAvatar>

      <BtnLogout onPress={() => signOut()}>
        <BtnInfo>Sair</BtnInfo>
      </BtnLogout>

      <BoxSpiderH>
        <Image source={SpiderH} />
      </BoxSpiderH>

      <BoxTeia>
        <Image source={TeiaColorida} />
      </BoxTeia>

    </Container>
  );
};

export default Profile;
