
import react, {useState} from 'react'


function MainConnector() {
    const [question, setQuestion] = useState(1);
    const [name, setName] = useState("guest");
    const [points,setPoints] = useState(5)
   const [meaningOfP, setMeaning] = useState("")

    function handleQuestionChange() {
        setQuestion(question + 1);
    }

    function HandleName(e) {
       setName(e.target.value)
    }

    function handlePointsPlus(e) {
        setPoints(points + 1);
    }

    function handlePointsMinus(e) {
      setPoints(points - 1);
    }

    function calculatePoints() {
        if (points < 1) {
            setPoints(1)
        }else if (points > 10) {
            setPoints(10);
        }
    }

    function handleGetValueOfSelect() {
        let ValueOfSelection = document.querySelector('#Selection');
        if (ValueOfSelection.value === "0") {
            setPoints(p => p - 1);
            setPoints(p => p - 1);
        } else if (ValueOfSelection.value === "1") {
            setPoints(p => p - 1);
        } else if (ValueOfSelection.value === "2") {
            setPoints(p => p - 1);
        } else if (ValueOfSelection.value === "3") {
            // do nothing
        } else if (ValueOfSelection.value === "4") {
            setPoints(p => p + 1);
        } else if (ValueOfSelection.value === "5") {
            setPoints(p => p + 1);
        } else if (ValueOfSelection.value === "6") {
            setPoints(p => p + 1);
            setPoints(p => p + 1);
        }
    }
    
    function calculatePointsMeaning() {
        if (points == 1) {
           setMeaning("i belive you will be unsuccsesful if you dont change you ways") ;
        }else if (points == 2) {
            setMeaning("i think you will be unsuccsesful if you dont change")
        }else if (points == 3) {
            setMeaning("i think you will be midly unsuccsesful so you gotta focus on your goals")
        }else if (points == 4) {
            setMeaning("i think youre around the avreage person and youre gonna be avreage in succsesfulnes")
        }else if (points == 5) {
            setMeaning("i think youre avreage and is gonna be like the avreage person");
        }else if (points == 6) {
            setMeaning("i think youre gonna be slightly succsesful")
        }else if (points == 7) {
            setMeaning("i think youre pretty good and is gonna maybe be succsesful")
        }else if (points >= 8) {
            setMeaning("i think you are gonna be succsesful")
        }
    }



    if (question == 1) {
        return(<>
          <div className="MainContainor">
            <h2>hello today i will rate you on how succseful i think you are gonna be</h2>
            <h3>whats your name</h3>
            <input type="text" value={name} placeholder="name here" className="Input1" onChange={HandleName}/>
        </div>
        <button className='submit'onClick={handleQuestionChange} >submit</button>
        </>);
    }else if (question == 2) {
        return(<>
        <h1>hello {name}</h1>
        <h3>what would you rather do when you have a test tomrrow</h3>
        <button onClick={() => { handlePointsMinus(); handleQuestionChange();}} className='firstQ'>party</button>
        <button onClick={() => { handlePointsPlus(); handleQuestionChange();}}  className='firstQ'>study</button>
        </>);
    }else if (question == 3) {
        return(<>
        <h3>hi {name} do you already know what you want to work as and prepering for it? (say if you wanna be a proggramer are you already learning?)</h3>
        <button onClick={() => { handlePointsPlus(); handleQuestionChange();}} className='secondQ'>yes</button>
        <button onClick={() => { handlePointsMinus(); handleQuestionChange();}}className='secondQ'>no</button>
        </>);
    }else if (question == 4) {
        return(<>
        <h1>how many hours do you practice in a day</h1>
        <select name="" id="Selection">
            <option value="0">none</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6+</option>
        </select>
        <button className='submitSelection'onClick= {() => {handleQuestionChange(); handleGetValueOfSelect();}} >submit</button>
        </>);
    }else if (question == 5) {
        return(<>
        <h3>are you willing to work hard to get your target</h3>
        <button onClick={() => {handlePointsPlus(); handleQuestionChange();}} className='OtheQ'>yes</button>
        <button onClick={() => {handlePointsMinus(); handleQuestionChange();}}className='OtheQ'>no</button>
        </>);
    }else if (question == 6) {
    return(<>
    <h3>when you need to be productive are you?</h3>
        <button onClick={() => {handlePointsPlus(); handleQuestionChange();}} className='OtheQ'>yes</button>
        <button onClick={() => {handlePointsMinus(); handleQuestionChange();}}className='OtheQ'>no</button>
    </>);
    }else if (question == 7) {
        return(<> 
        <h3>wow you finished good job</h3>
        <h3 >are you ready to see your score?</h3>
        <button onClick={() => {handleQuestionChange(); calculatePoints();}} className='specialButtons'>yes</button>
        </>);
    }else if (question == 8) {
        return(<>
        <h3>your score is: </h3>
        <h2 className='pointShower'>{points}</h2>
        <h2>wanna know what your scores mean?</h2>
        <button onClick={() => {handleQuestionChange(); calculatePointsMeaning();}}className='specialButtons2'>press here</button>
        </>);
    }else if (question == 9) {
        return(<>
        <h3>you got {points} points meaning: {meaningOfP}</h3>
        <h4 id='disclaimer'> disclaimer: do not take this as a real estimete this is just my guess because anything can happen in the buissness world so dont excpect what i say to be true</h4>
        </>);
    }
}


export default MainConnector