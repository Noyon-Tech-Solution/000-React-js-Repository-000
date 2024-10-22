const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

function Props (props){
    const {titleText, descText} = props;
    return(
        <div className="card">
            {/* <h2 className="heading2">{props.titleText}</h2>
            <p className="card">{props.descText}</p> */}
            <h2 className="heading2">{titleText}</h2>
            <p className="card">{descText}</p>
            <p className="date">{dateName + "/" + monthName + "/" + yearName}</p>
        </div>
    )
}
export default Props;

{/* 03 How to use Props and Destructuring in React js  */}