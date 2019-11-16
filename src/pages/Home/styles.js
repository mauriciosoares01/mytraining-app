import styled from 'styled-components/native';
import {StyleSheet, FlatList} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
  padding: 15px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-vertical: 15px;
  color: rgba(0, 0, 0, 0.75);
`;

export const Button = styled.Button.attrs({
  title: '+ Adicionar treino',
  color: '#ff4d00',
})``;

export const Input = styled.TextInput.attrs({
  placeholder: 'Ex.: Superiores, Segunda-feira',
})`
  border-bottom-width: ${StyleSheet.hairlineWidth};
`;

export const ModalContainer = styled.View`
  padding: 15px;
  background-color: #fff;
  border-radius: 6px;
`;

export const InputTitle = styled.Text`
  font-size: 12px;
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
`;

export const ModalText = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 10px;
`;

export const SaveButton = styled.TouchableOpacity`
  margin-top: 10px;
  width: 65px;
  height: 30px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #ff4d00;
`;

export const List = styled(FlatList)``;
