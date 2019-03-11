// add solution here
function theBeatlesPlay(musicians, instruments) {
  var results = [];
  for (var i = 0; i < musicians.length; i++) {
    var temp = musicians[i] + " plays " + instruments[i];
    results[i] = temp;
  }
  return results;
}