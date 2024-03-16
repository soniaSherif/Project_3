import React, { useEffect } from "react";
import Front from "./Front";
import Back from "./Back";
import { useState } from "react";
import Guess from "./Guess";
const Cards = () => {
    const content = [{"What is this country?":["./640px-Flag_of_Algeria.svg.png","Algeria","pink"]},{"What is this country?":["./640px-Flag_of_Angola.svg.png","Angola","lightgreen"]},{"What is this country?":["./640px-Flag_of_Benin.svg.png","Benin","lightyellow"]},{"What is this country?":["./640px-Flag_of_Botswana.svg.png","Botswana","lightgreen"]},{"What is this country?":["./640px-Flag_of_Burkina_Faso.svg.png","Burkina Faso","lightyellow"]},{"What is this country?":["./640px-Flag_of_Burundi.svg.png","Burundi","lightblue"]},{"What is this country?":["./640px-Flag_of_Cameroon.svg.png","Cameroon","lightgrey"]},{"What is this country?":["./640px-Flag_of_Cape_Verde.svg.png","Cape Verde","lightyellow"]},{"What is this country?":["./640px-Flag_of_Chad.svg.png","Chad","lightgrey"]},{"What is this country?":["./640px-Flag_of_Djibouti.svg.png","Djibouti","lightblue"]},{"What is this country?":["./640px-Flag_of_Egypt.svg.png","Egypt","pink"]},{"What is this country?":["./640px-Flag_of_Equatorial_Guinea.svg.png","Equatorial Guinea","lightgrey"]},{"What is this country?":["./640px-Flag_of_Eritrea.svg.png","Eritrea","lightblue"]},{"What is this country?":["./640px-Flag_of_Eswatini.svg.png","Eswatini","lightgreen"]},{"What is this country?":["./640px-Flag_of_Ethiopia.svg.png","Ethiopia","lightblue"]},{"What is this country?":["./640px-Flag_of_Ghana.svg.png","Ghana","lightyellow"]},{"What is this country?":["./640px-Flag_of_Guinea-Bissau.svg.png","Guinea-Bissau","lightyellow"]},{"What is this country?":["./640px-Flag_of_Guinea.svg.png","Guinea","lightyellow"]},{"What is this country?":["./640px-Flag_of_the_Central_African_Republic.svg.png","The Central African Republic","lightgrey"]},{"What is this country?":["./640px-Flag_of_the_Comoros.svg.png","The Comoros","lightblue"]},{"What is this country?":["./Flag_of_the_Democratic_Republic_of_the_Congo.png","The Democratic Republic of the Congo","lightgrey"]},{"What is this country?":["./640px-Flag_of_The_Gambia.svg.png","The Gambia","lightyellow"]},{"What is this country?":["./640px-Flag_of_the_Republic_of_the_Congo.svg.png","Congo","lightgrey"]},{"What is this country?":["./Flag_of_Gabon.png","Gabon","lightgrey"]},{"What is this country?":["./Flag_of_the_Sahrawi_Arab_Democratic_Republic.png","The Sahrawi Arab Democratic Republic","lightyellow"]},{"What is this country?":["./560px-Flag_of_Niger.svg.png","Niger","lightyellow"]},{"What is this country?":["./640px-Flag_of_Côte_d'Ivoire.svg.png","Côte d'Ivoire","lightyellow"]},{"What is this country?":["./640px-Flag_of_Kenya.svg.png","Kenya","lightblue"]},{"What is this country?":["./640px-Flag_of_Lesotho.svg.png","Lesotho","lightgreen"]},{"What is this country?":["./640px-Flag_of_Liberia.svg.png","Liberia","lightyellow"]},{"What is this country?":["./640px-Flag_of_Libya.svg.png","Libya","pink"]},{"What is this country?":["./640px-Flag_of_Madagascar.svg.png","Madagascar","lightblue"]},{"What is this country?":["./640px-Flag_of_Malawi.svg.png","Malawi","lightblue"]},{"What is this country?":["./640px-Flag_of_Mali.svg.png","Mali","lightyellow"]},{"What is this country?":["./640px-Flag_of_Mauritania.svg.png","Mauritania","lightyellow"]},{"What is this country?":["./640px-Flag_of_Mauritius.svg.png","Mauritius","lightblue"]},{"What is this country?":["./640px-Flag_of_Morocco.svg.png","Morocco","pink"]},{"What is this country?":["./640px-Flag_of_Mozambique.svg.png","Mozambique","lightblue"]},{"What is this country?":["./640px-Flag_of_Namibia.svg.png","Namibia","lightgreen"]},{"What is this country?":["./640px-Flag_of_Nigeria.svg.png","Nigeria","lightyellow"]},{"What is this country?":["./640px-Flag_of_Rwanda.svg.png","Rwanda","lightblue"]},{"What is this country?":["./640px-Flag_of_São_Tomé_and_Príncipe.svg.png","São Tomé and Príncipe","lightgrey"]},{"What is this country?":["./640px-Flag_of_Senegal.svg.png","Senegal","lightyellow"]},{"What is this country?":["./640px-Flag_of_Seychelles.svg.png","Seychelles","lightblue"]},{"What is this country?":["./640px-Flag_of_Sierra_Leone.svg.png","Sierra Leone","lightyellow"]},{"What is this country?":["./640px-Flag_of_Somalia.svg.png","Somalia","lightblue"]},{"What is this country?":["./640px-Flag_of_South_Africa.svg.png","South Africa","lightgreen"]},{"What is this country?":["./640px-Flag_of_South_Sudan.svg.png","South Sudan","lightblue"]},{"What is this country?":["./640px-Flag_of_Sudan.svg.png","Sudan","pink"]},{"What is this country?":["./640px-Flag_of_Tanzania.svg.png","Tanzania","lightblue"]},{"What is this country?":["./640px-Flag_of_Togo.svg.png","Togo","lightyellow"]},{"What is this country?":["./640px-Flag_of_Tunisia.svg.png","Tunisia","pink"]},{"What is this country?":["./640px-Flag_of_Uganda.svg.png","Uganda","lightblue"]},{"What is this country?":["./640px-Flag_of_Zambia.svg.png","Zambia","lightblue"]},{"What is this country?":["./640px-Flag_of_Zimbabwe.svg.png","Zimbabwe","lightblue"]}];
    const randomCardIndex = Math.floor(Math.random() * content.length);
    const randomCard = content[randomCardIndex];
    const randomKey = Object.keys(randomCard)[0];
    const [question, setQuestion] = useState(randomKey);
    const [answer, setAnswer] = useState(randomCard[randomKey][1]);
    const [image, setImage] = useState(randomCard[randomKey][0]);
    const [flipped, setFlipped] = useState(false);
    const[color,setColor] = useState(randomCard[randomKey][2])
    const [userGuess, setUserGuess] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);


    const goToPreviousCard = () => {
        if (currentIndex > 0) {
          const prevIndex = currentIndex - 1;
          const card = content[prevIndex];
          const question = Object.keys(card)[0];
          const answer = card[question][1];
          const image = card[question][0];
          const color = card[question][2];
      
          setQuestion(question);
          setAnswer(answer);
          setImage(image);
          setColor(color);
          setCurrentIndex(prevIndex);
        }
      };
      
      const goToNextCard = () => {
        if (currentIndex < content.length - 1) {
          const nextIndex = currentIndex + 1;
          const card = content[nextIndex];
          const question = Object.keys(card)[0];
          const answer = card[question][1];
          const image = card[question][0];
          const color = card[question][2];
      
          setQuestion(question);
          setAnswer(answer);
          setImage(image);
          setColor(color);
          setCurrentIndex(nextIndex);
        }
      };
      
    const handleGuess = (guess) => {
        setUserGuess(guess);
        if (guess.trim().toLowerCase() === answer.trim().toLowerCase()) {
            setIsCorrect(true); 
          } else {
            setIsCorrect(false); 
          }
      };
    
      const handleClick = () => {
        setFlipped((prevState) => !prevState);
      };
    const shuffleCard = () => {
        const storedIndex = currentIndex;
        const randomQuestion = content[Math.floor(Math.random() * content.length)];
        const randomKey = Object.keys(randomQuestion)[0];
        setQuestion(randomKey)
        setAnswer(randomQuestion[randomKey][1])
        setImage(randomQuestion[randomKey][0])
        setFlipped(false)
        setColor(randomQuestion[randomKey][2])
        setCurrentIndex(storedIndex);
    }

    return(
        <div>
        <div className={"Cards "+ color} onClick={handleClick}>
            <div className="innerCard">
                {flipped ? <Back answer={answer} color={color}/> : <Front question={question} img ={image} color={color}/>}
            </div>
        </div>
        <Guess handleChange={handleGuess} isCorrect={isCorrect} />
        <div className="buttons">
            <button onClick={goToPreviousCard}>Previous</button>
            <button onClick={goToNextCard}>Next</button>
            <button onClick={shuffleCard}>Shuffle cards</button>
        </div>
        </div>
    )

}
export default Cards;