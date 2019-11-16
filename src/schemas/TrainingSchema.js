export default class TrainingSchema {
  static schema = {
    name: 'Training',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      name: 'string',
    },
  };
}
