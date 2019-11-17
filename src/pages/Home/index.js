import React, {useState, useEffect} from 'react';
import Card from '../../Components/Card';
import {
  Container,
  Title,
  Button,
  ModalContainer,
  ModalTitle,
  ModalText,
  Input,
  InputTitle,
  SaveButton,
  ButtonText,
  List,
} from './styles';
import Modal from 'react-native-modal';
import getRealm from '../../Services/realm';

export function navigationOptions({navigation}) {
  return {
    title: 'myTraining',
  };
}

const Home = () => {
  const [modalVisibility, setVisibility] = useState(false);
  const [input, setInput] = useState('');
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    async function loadTrainnigs() {
      const realm = await getRealm();
      const data = realm.objects('training');
      setTrainings(data);
    }

    loadTrainnigs();
  }, []);

  async function saveTraining(training) {
    const data = {
      name: training,
      id: 2,
    };

    const realm = await getRealm();
    realm.write(() => {
      realm.create('training', data);
    });
  }

  async function handleAddTraining(training) {
    await saveTraining(training);
    setVisibility(!modalVisibility);
  }

  return (
    <Container>
      <Button onPress={() => setVisibility(!modalVisibility)} />
      <Title>Meus treinos</Title>
      <List
        data={trainings}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Card label={item.name} />}
      />
      <Modal
        isVisible={modalVisibility}
        onBackdropPress={() => setVisibility(!modalVisibility)}
        onBackButtonPress={() => setVisibility(!modalVisibility)}>
        <ModalContainer>
          <ModalTitle>Inserir novo treino</ModalTitle>
          <ModalText>
            Depois você poderá inserir os exercícios para esse treino
          </ModalText>
          <InputTitle>Nome do treino</InputTitle>
          <Input onChangeText={setInput} />
          <SaveButton onPress={() => handleAddTraining(input)}>
            <ButtonText>Salvar</ButtonText>
          </SaveButton>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default Home;
