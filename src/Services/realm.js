import Realm from 'realm';
import TrainingSchema from '../schemas/TrainingSchema';

export default function getRealm() {
  return Realm.open({
    schema: [TrainingSchema],
  });
}
