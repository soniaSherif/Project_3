import React, { useEffect } from "react";
import Front from "./Front";
import Back from "./Back";
import { useState } from "react";
const Cards = () => {
    const content = [{"What is this country?":["./640px-Flag_of_Algeria.svg.png","Algeria","yellow"]},{"What is this country?":["./640px-Flag_of_Angola.svg.png","Angola","red"]},{"What is this country?":["./640px-Flag_of_Benin.svg.png","Benin","grey"]},{"What is this country?":["./640px-Flag_of_Botswana.svg.png","Botswana","red"]},{"What is this country?":["./640px-Flag_of_Burkina_Faso.svg.png","Burkina Faso","grey"]},{"What is this country?":["./640px-Flag_of_Burundi.svg.png","Burundi","blue"]},{"What is this country?":["./640px-Flag_of_Cameroon.svg.png","Cameroon","blue"]},{"What is this country?":["./640px-Flag_of_Cape_Verde.svg.png","Cape Verde","grey"]},{"What is this country?":["./640px-Flag_of_Chad.svg.png","Chad","blue"]},{"What is this country?":["./640px-Flag_of_Djibouti.svg.png","Djibouti","green"]},{"What is this country?":["./640px-Flag_of_Egypt.svg.png","Egypt","yellow"]},{"What is this country?":["./640px-Flag_of_Equatorial_Guinea.svg.png","Equatorial Guinea","grey"]},{"What is this country?":["./640px-Flag_of_Eritrea.svg.png","Eritrea","green"]},{"What is this country?":["./640px-Flag_of_Eswatini.svg.png","Eswatini","blue"]},{"What is this country?":["./640px-Flag_of_Ethiopia.svg.png","Ethiopia","green"]},{"What is this country?":["./640px-Flag_of_Ghana.svg.png","Ghana","blue"]},{"What is this country?":["./640px-Flag_of_Guinea-Bissau.svg.png","Guinea-Bissau","grey"]},{"What is this country?":["./640px-Flag_of_Guinea.svg.png","Guinea"]},{"What is this country?":["./640px-Flag_of_the_Central_African_Republic.svg.png","The Central African Republic"]},{"What is this country?":["./640px-Flag_of_the_Comoros.svg.png","The Comoros"]},{"What is this country?":["./Flag_of_the_Democratic_Republic_of_the_Congo.png","The Democratic Republic of the Congo"]},{"What is this country?":["./640px-Flag_of_The_Gambia.svg.png","The Gambia"]},{"What is this country?":["./640px-Flag_of_the_Republic_of_the_Congo.svg.png","Congo"]},{"What is this country?":["./Flag_of_Gabon.png","Gabon"]},{"What is this country?":["./Flag_of_the_Sahrawi_Arab_Democratic_Republic.png","The Sahrawi Arab Democratic Republic"]},{"What is this country?":["./560px-Flag_of_Niger.svg.png","Niger"]},{"What is this country?":["./640px-Flag_of_Côte_d'Ivoire.svg.png","Côte d'Ivoire"]},{"What is this country?":["./640px-Flag_of_Kenya.svg.png","Kenya"]},{"What is this country?":["./640px-Flag_of_Lesotho.svg.png","Lesotho"]},{"What is this country?":["./640px-Flag_of_Liberia.svg.png","Liberia"]},{"What is this country?":["./640px-Flag_of_Liberia.svg.png","Liberia"]},{"What is this country?":["./640px-Flag_of_Libya.svg.png","Libya","yellow"]},{"What is this country?":["./640px-Flag_of_Madagascar.svg.png","Madagascar"]},{"What is this country?":["./640px-Flag_of_Malawi.svg.png","Malawi"]},{"What is this country?":["./640px-Flag_of_Mali.svg.png","Mali"]},{"What is this country?":["./640px-Flag_of_Mauritania.svg.png","Mauritania"]},{"What is this country?":["./640px-Flag_of_Mauritius.svg.png","Mauritius"]},{"What is this country?":["./640px-Flag_of_Morocco.svg.png","Morocco","yellow"]},{"What is this country?":["./640px-Flag_of_Mozambique.svg.png","Mozambique"]},{"What is this country?":["./640px-Flag_of_Namibia.svg.png","Namibia"]},{"What is this country?":["./640px-Flag_of_Nigeria.svg.png","Nigeria"]},{"What is this country?":["./640px-Flag_of_Rwanda.svg.png","Rwanda"]},{"What is this country?":["./640px-Flag_of_São_Tomé_and_Príncipe.svg.png","São Tomé and Príncipe"]},{"What is this country?":["./640px-Flag_of_Senegal.svg.png","Senegal"]},{"What is this country?":["./640px-Flag_of_Seychelles.svg.png","Seychelles"]},{"What is this country?":["./640px-Flag_of_Sierra_Leone.svg.png","Sierra Leone"]},{"What is this country?":["./640px-Flag_of_Somalia.svg.png","Somalia"]},{"What is this country?":["./640px-Flag_of_South_Africa.svg.png","South Africa"]},{"What is this country?":["./640px-Flag_of_South_Sudan.svg.png","South Sudan","yellow"]},{"What is this country?":["./640px-Flag_of_Sudan.svg.png","Sudan"]},{"What is this country?":["./640px-Flag_of_Tanzania.svg.png","Tanzania"]},{"What is this country?":["./640px-Flag_of_Togo.svg.png","Togo"]},{"What is this country?":["./640px-Flag_of_Tunisia.svg.png","Tunisia","yellow"]},{"What is this country?":["./640px-Flag_of_Uganda.svg.png","Uganda"]},{"What is this country?":["./640px-Flag_of_Zambia.svg.png","Zambia"]},{"What is this country?":["./640px-Flag_of_Zimbabwe.svg.png","Zimbabwe"]}];
    const randomCardIndex = Math.floor(Math.random() * content.length);
    const randomCard = content[randomCardIndex];
    const randomKey = Object.keys(randomCard)[0];
    const [question, setQuestion] = useState(randomKey);
    const [answer, setAnswer] = useState(randomCard[randomKey][1]);
    const [image, setImage] = useState(randomCard[randomKey][0]);
    const [flipped, setFlipped] = useState(false);
    const[color,setColor] = useState(randomCard[randomKey][2])

    
    const handleClick = () => {
        setFlipped(!flipped)
        }
    const nextCard = () => {
        const randomQuestion = content[Math.floor(Math.random() * content.length)];
        const randomKey = Object.keys(randomQuestion)[0];
        setQuestion(randomKey)
        setAnswer(randomQuestion[randomKey][1])
        setImage(randomQuestion[randomKey][0])
        setFlipped(false)
        setColor(randomQuestion[randomKey][2])
    }
    
    return(
        <div>
        <div className="Cards" onClick={handleClick}>
            <div className="innerCard">
                {flipped ? <Back answer={answer} color={color}/> : <Front question={question} img ={image} color={color}/>}
            </div>
        </div>
        <div className="buttons">
            <button>Previous</button>
            <button onClick={nextCard}>Next</button>
        </div>
        </div>
    )

}
export default Cards;