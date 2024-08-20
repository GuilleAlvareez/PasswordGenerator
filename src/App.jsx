import { Checkboxs } from "./components/checkboxs"
import { checkboxText, LOWERCASE, UPPERCASE, NUMBERS, SYMBOLS } from "./logic/options"
import './App.css'
import { useState } from "react"

function App() {
  //CAMBIAR EL LOGO Y EL TITULO DE LA PAGINA

  //ESTADOS PARA MANEJAR LAS OPCIONES DE LOS CHECKBOX
  const [enabledLowercase, setEnabledLowercase] = useState(true)
  const [enabledUppercase, setEnabledUppercase] = useState(false)
  const [enabledNumbers, setEnabledNumbers] = useState(false)
  const [enabledSymbols, setEnabledSymbols] = useState(false)

  const handleEnabledLowercase = () => setEnabledLowercase(!enabledLowercase)
  const handleEnabledUppercase = () => setEnabledUppercase(!enabledUppercase)
  const handleEnabledNumbers = () => setEnabledNumbers(!enabledNumbers)
  const handleEnabledSymbols = () => setEnabledSymbols(!enabledSymbols)
  
  //CAMBIAR LA LONGITUD DE LA CONTRASEÑA
  const [passwordLength, setPasswordLength] = useState(1)

  const handleChangeLength = (event) => {
    setPasswordLength(event.target.value)
  }

  //FUNCION QUE DEVUELVE LA CONTRASEÑA GENERADA
  const [password, setPassword] = useState("")

  const generatePassword = () => {
    //ARRAY CON TODAS LAS OPCIONES DE LA CONTRASEÑA
    let passWordCharacters = "";
    if (enabledLowercase) passWordCharacters += LOWERCASE;
    if (enabledUppercase) passWordCharacters += UPPERCASE;
    if (enabledNumbers) passWordCharacters += NUMBERS;
    if (enabledSymbols) passWordCharacters += SYMBOLS;

    //CONTRASEÑA ALEATORIA
    let newPassword = "";
    if (passWordCharacters.length != 0) {
      for (let i = 0; i < passwordLength; i++) {
        console.log(i)
        const randomIndex = Math.floor(Math.random() * passWordCharacters.length);
        console.log(randomIndex)
        newPassword += passWordCharacters[randomIndex];  
      }
    }
    
    //DEVUELVE LA CONTRASEÑA GENERADA
    setPassword(newPassword);
  }

  return(
    <>
      <div className="big-box">
        <header>
          <p className="tittle">Password Generator</p>
        </header>

        <div className="options">
          {/*PASARLE AL PARAMETRO VALUE DEL INPUT UNA FUNCION CON LA CONSTRASEÑA ALEATORIA*/}
          <input type="text" className="input-text" disabled value={password} />

          <nav className="length">
            <p>Password Length</p>
            <input className="input-length" 
                   type="range" 
                   min="1" 
                   max="30" 
                   step="1" 
                   value={passwordLength} 
                   onChange={handleChangeLength}/>
            <label>{passwordLength}</label>
          </nav>

          <article className="settings">
            <p>Password Settings</p>
            
            <aside className="checkboxes">
            {
              <>
                <Checkboxs 
                  text={checkboxText[0]} 
                  checked={enabledLowercase} 
                  onChange={handleEnabledLowercase} 
                />
                <Checkboxs 
                  text={checkboxText[1]} 
                  checked={enabledUppercase} 
                  onChange={handleEnabledUppercase} 
                />
                <Checkboxs 
                  text={checkboxText[2]} 
                  checked={enabledNumbers} 
                  onChange={handleEnabledNumbers} 
                />
                <Checkboxs 
                  text={checkboxText[3]} 
                  checked={enabledSymbols} 
                  onChange={handleEnabledSymbols} 
              />
              </>
            }
            </aside>
          </article>

          <button className="generate" onClick={generatePassword}>Generate Password</button>
        </div>
      </div>
    </>
  )
}

export default App
