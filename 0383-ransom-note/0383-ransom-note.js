/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let ransomMap={};
  for(let i = 0 ; i < ransomNote.length ; i++){
    if(ransomMap[ransomNote[i]]){
      ransomMap[ransomNote[i]]++;
    }else{
      ransomMap[ransomNote[i]]=1
    }
  }
  for(let i = 0 ; i < magazine.length ; i++){
    if(ransomMap[magazine[i]]){
      ransomMap[magazine[i]]--;
    }
  }
  for(let [key,value] in ransomMap){
    if(ransomMap[key]){
      return false;
    }
  }
  return true;
};