import Realm from 'realm';
import AllSchemas from '../schemas/AllSchemas';

export default function getRealm() {
  return Realm.open({
    schema: [AllSchemas],
  });
}
