import React, {useState} from "react";


type RatingPropsType = {
// value: 0|1|2|3|4|5
}

function UncontrolledRating (props:  RatingPropsType) {
    console.log("Rating rendering")
    // if (props.value === 1) {
    let [value, setValue] = useState(0)
        return <div>
            <Star selected= {value > 0} setValue ={setValue} value={1}/>
            {/*передаем через пропсы value из арр и if не нужен т.к это тоже*/}
            <Star selected={value > 1} setValue ={setValue} value={2}/>
            <Star selected={value > 2} setValue ={setValue} value={3}/>
            <Star selected={value > 3} setValue ={setValue} value={4}/>
            <Star selected={value > 4} setValue ={setValue} value={5}/>
        </div>
    }
//     if (props.value === 2) {
//         return <div>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//         </div>
//     }
//     if (props.value === 3) {
//         return <div>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//         </div>
//     }
//     if (props.value === 4) {
//         return <div>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={false}/>
//         </div>
//     }
//     if (props.value === 5) {
//         return <div>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//         </div>
//     }
//
//     return <div>
//         <Star selected={false}/>
//         <Star selected={false}/>
//         <Star selected={false}/>
//         <Star selected={false}/>
//         <Star selected={false}/>
//     </div>
// }
type StarPropsType = {
    selected: boolean
    value: 1|2|3|4|5
    setValue: (value: 1|2|3|4|5) => void
}
function Star(props: StarPropsType) {
    console.log("Star rendering")
    return  <span className="Star" onClick={() =>{props.setValue(props.value)}}>
        { props.selected === true ? <b  className="selectStar"> star </b>:" STAR " }</span>
}
    // if(props.selected === true) { не нужен используем тернарный оператор
    // return<span className="selectStar"> <b>star</b></span>
    // }else {
    //     return <span className="Star"> STAR</span>
    // }


export default UncontrolledRating;