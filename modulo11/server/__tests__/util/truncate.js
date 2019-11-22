import databe from '../../src/database';

export default function truncate() {
  return Promise.all(
    Object.keys(databe.connection.models).map(key => {
      return databe.connection.models[key].destroy({
        truncate: true,
        force: true,
      });
    })
  );
}
