// add solution here
function theNeatlesPlay(musicians, instruments) {
  var results = [];
  for (i = 0; i < musicians.length; i++) {
    var temp = musicians[i] + " plays " + instruments[i];
    results[i] = temp;
  }
  return results;
}