function List(){
    const fruits = [{id:1, name:"Apple", calroies:95}, {id:2, name:"Banana",calroies:85}, {id:3, name:"Cherry",calroies:70}];

    // fruits.sort((a,b) => a.name.localeCompare(b.name));
    // fruits.sort((a,b) => b.name.localeCompare(a.name));
    //fruits.sort((a,b) => a.calroies - b.calroies);
    // fruits.sort((a,b) => b.calroies - a.calroies);
    const lowCalorieFruits = fruits.filter(fruit => fruit.calroies < 80);
    const listItems = lowCalorieFruits.map(lowCaloriefruit => <li key={lowCaloriefruit.id}>{lowCaloriefruit.name}: &nbsp; <b>{lowCaloriefruit.calroies}</b></li>)
    return(<ol>{listItems}</ol>);
}
export default List;