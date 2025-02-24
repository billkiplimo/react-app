
function Fist(){
    const fruits=["apple","orange","banana","coconut","pineapple"];

    const fistitems=fruits.map(fruits=><li>{fruits}</li>);
    return(<ol>{fistitems}</ol>);
}
export default Fist