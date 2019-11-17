import Realm from 'realm';

export const TRAINING_SCHEMA = 'training';
export const EXERCISE_SCHEMA = 'exercise';

export const TrainingSchema {
  schema = {
    name: TRAINING_SCHEMA,
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      name: 'string',
      exercises: {type: 'list', objectType: EXERCISE_SCHEMA},
    },
  }
};

export const ExerciseSchema {
  schema = {
    name: EXERCISE_SCHEMA,
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      name: 'string',
      series: 'string',
      repetitions: 'string',
      rest: 'string',
      weigth: 'string',
      details: 'string',
    },
  }
};

const databaseOptions = {
  path: 'myTrainingApp.realm',
  schema: [TRAINING_SCHEMA, EXERCISE_SCHEMA],
  schemaVersion: 0,
}

export const insertNewTraining = newTraining => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      realm.create(TRAINING_SCHEMA, newTraining);
      resolve(newTraining);
    })
  }).catch(error => reject(error));
});


