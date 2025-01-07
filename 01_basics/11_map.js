const map = new Map();
map.set('name','Shohan');
map.set('age',24);
map.set('cgpa',3.67);
console.log(map);

for(const key of map){
    console.log(key);
}

for(const [key,value] of map){
    console.log(key,': ',value);
}