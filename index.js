    const cats = ["Milo", "Otis", "Garfield"]
console.log(cats);
function destructivelyAppendCat(name){
    cats.push("Ralph");
    return cats;}

    function  destructivelyPrependCat(name){
        cats.unshift("Bob")
        return cats;
    }

    function destructivelyRemoveLastCat(){
    cats.pop("Garfield");
    return cats;
    }

    function destructivelyRemoveFirstCat(){
        cats.shift("Milo")
        return cats;
    }

    function appendCat(name){
        const newCat= [...cats, "Broom"];
        return newCat;
    }

    function prependCat(name){
        
    const allCats= ["Arnold", ...cats];
    return allCats;
    }


    function removeLastCat(){
        const copyOfCats= cats.slice(0,cats.length-1);
        return copyOfCats;
    }

    function removeFirstCat(){
   const newCatsCopy= cats.slice(1);
   return newCatsCopy;
}