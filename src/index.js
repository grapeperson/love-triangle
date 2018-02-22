/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let triangles = 0;
  let a, b, c;
  for (let i = 0; i < preferences.length; i++) {
    if(preferences[i] != 0) {
      a = preferences[i];
      b = preferences[a - 1];
      c = preferences[b - 1];
      if(preferences[c - 1] == a && a != b && a != c) {
        preferences[i] = 0;
        preferences[a - 1] = 0;
        preferences[b - 1] = 0;
        triangles++;
      }
    }
}
return triangles;
};
