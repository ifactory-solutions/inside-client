import lodash from 'lodash';

/**
 * @param   {array}    array
 * @param   {String}    id
 * @param   {String}    keyAlias
 * @return  {Array}
 */
export const queryArray = (array, key, keyAlias = 'key') => {
  if (!(array instanceof Array)) {
    return null;
  }
  const item = array.filter(_ => _[keyAlias] === key);
  if (item.length) {
    return item[0];
  }
  return null;
};

/**
 * @param   {array}     array
 * @param   {String}    id
 * @param   {String}    pid
 * @param   {String}    children
 * @return  {Array}
 */
export const arrayToTree = (array, id = 'id',
  pid = 'pid', children = 'children') => {
  const data = lodash.cloneDeep(array);
  let result = []; // eslint-disable-line
  let hash = {}; // eslint-disable-line
  data.forEach((item, index) => {
    hash[data[index][id]] = data[index];
  });

  data.forEach(item => {
    let hashVP = hash[item[pid]]; // eslint-disable-line
    if (hashVP) {
      !hashVP[children] && (hashVP[children] = []); // eslint-disable-line
      hashVP[children].push(item);
    } else {
      result.push(item);
    }
  });
  return result;
};
