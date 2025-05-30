import { FunctionComponent, useState, useEffect } from "react"; // Added useEffect
import "./SavePage.css";
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const SavePageDesktop: FunctionComponent = () => {
  const [email, setEmail] = useState(""); // Keep if email feature is desired (optional for now)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // Optional: keep handleEmailChange if email input is kept
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleProceed = async () => {
    setIsLoading(true);
    setError(null);

    try {
      let allAnswers: (number | null)[] = [];
      for (let i = 1; i <= 5; i++) {
        const key = `respostasPage${i}`;
        const pageAnswersString = localStorage.getItem(key);
        if (pageAnswersString) {
          try {
            const parsedAnswers = JSON.parse(pageAnswersString);
            // Ensure correct property names if they differ from resposta1-4
            allAnswers.push(parsedAnswers.resposta1 ?? null);
            allAnswers.push(parsedAnswers.resposta2 ?? null);
            allAnswers.push(parsedAnswers.resposta3 ?? null);
            allAnswers.push(parsedAnswers.resposta4 ?? null);
          } catch (e) {
            console.error(`Error parsing localStorage for ${key}:`, e);
            // Add nulls for all 4 questions of the page if parsing fails
            allAnswers.push(null, null, null, null); 
          }
        } else {
          console.warn(`No data found in localStorage for ${key}`);
          // Add nulls for all 4 questions of the page if data is missing
          allAnswers.push(null, null, null, null); 
        }
      }

      if (allAnswers.length !== 20) {
        // This check might be redundant if the loop always pushes 4 values
        // but good for sanity check if logic changes
        console.error("Collected answers length is not 20:", allAnswers.length);
        throw new Error("Não foi possível coletar todas as respostas. Por favor, tente refazer o teste.");
      }
      
      // Replace nulls with 3 (neutral) before sending to backend
      const finalAnswers = allAnswers.map(ans => ans === null ? 3 : ans);

      // **Optional Email Submission (Commented out as per instruction)**
      // if (email) {
      //   try {
      //     const emailResponse = await fetch('http://localhost:3306/emails/incluir', { // Ensure this port and path are correct
      //       method: 'POST',
      //       headers: { 'Content-Type': 'application/json' },
      //       body: JSON.stringify({ email }),
      //     });
      //     if (!emailResponse.ok) console.error('Falha ao enviar e-mail');
      //   } catch (emailError) {
      //     console.error('Erro ao enviar e-mail:', emailError);
      //   }
      // }

      // **Call Vocational Test API:**
      const response = await fetch('/api/calculate-vocation', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: finalAnswers }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erro do servidor: ${response.status} ${errorText}`);
      }

      const result = await response.json(); 

      if (!result || !Array.isArray(result) || result.length === 0) { // Check for empty array too
          console.error("Resultado inesperado ou vazio do servidor:", result);
          throw new Error("Resultado inesperado ou vazio do servidor.");
      }
      
      const scores: number[] = result.map(score => typeof score === 'number' ? score : 0); // Ensure scores are numbers
      let maxScore = -1;
      let bestVocationIndex = -1;

      for (let i = 0; i < scores.length; i++) {
          if (scores[i] > maxScore) {
              maxScore = scores[i];
              bestVocationIndex = i;
          }
      }
      
      // Ensure there's at least one score and it's not negative from initialization
      if (bestVocationIndex === -1 && scores.length > 0) {
        // If all scores are 0 or less (e.g. from default mapping), pick first as a fallback
        // or handle as "undetermined". For now, let's assume valid positive scores are expected.
        // If all scores are 0 (e.g. if all answers were neutral and backend returns 0s),
        // this logic might need a tie-breaking rule or specific handling.
        // For now, if maxScore remains <=0 and there are scores, it indicates no clear preference.
        if (maxScore <= 0) {
             console.warn("Nenhuma vocação teve pontuação positiva clara. Verifique a lógica de pontuação ou respostas.", scores);
             // Fallback: could navigate to a generic "results" page or show a message.
             // For now, let's throw an error to indicate this state.
             throw new Error("Não foi possível determinar uma vocação clara com as pontuações atuais.");
        }
      }


      const vocationRoutes = [
        "/dessoftware",    // Index 0
        "/desweb",        // Index 1
        "/desaplicativos",// Index 2
        "/analisedados",  // Index 3
        "/segti"          // Index 4
      ];

      if (bestVocationIndex >= 0 && bestVocationIndex < vocationRoutes.length) {
        navigate(vocationRoutes[bestVocationIndex]);
      } else {
        console.error("Não foi possível determinar a vocação. Índice inválido ou pontuações não conclusivas.", result);
        throw new Error("Não foi possível determinar sua vocação com base nas respostas.");
      }

    } catch (err: any) {
      setError(err.message || "Ocorreu um erro ao processar seu teste.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="save-page-desktop">
      <div className="save-page">
        <div className="save-page-child" />
        <div className="rectangle">
          <img className="image-14-icon" alt="" src="/image-14@2x.png" />
          <div className="rectangle-child" />
          <div className="email">
          <input
            type="email"
            placeholder="email (opcional)" // Make it clear it's optional if not blocking
            value={email}
            onChange={handleEmailChange}
            disabled={isLoading} // Disable during loading
          />
          </div>
          {/* Link component removed from around the button as navigate is used */}
          <Button
            className="boto-continuar"
            name="Botão Continuar"
            id="btnContinuar"
            variant="primary"
            onClick={handleProceed} 
            disabled={isLoading} 
          >
            {isLoading ? "Aguarde..." : "VER RESULTADO"} 
          </Button>
          <div className="text4">
            <div className="finalizando-seu-teste">Finalizando seu teste!</div>
            {/* Updated text to be more generic if email is optional */}
            <div className="por-favor-digite">
              Clique em "VER RESULTADO" para descobrir sua área.
            </div>
          </div>
          {error && <div style={{ color: 'red', marginTop: '20px', textAlign: 'center', padding: '0 10px' }}>{error}</div>}
          <Link to="/" style={{ pointerEvents: isLoading ? 'none' : 'auto', display: 'inline-block', position: 'absolute', top: '10px', right: '10px' }}>
            <Button
              className="x-icon" // Assuming this class styles it as an X
              variant="light" // Light or no variant for an X button
              onClick={() => !isLoading && navigate("/")} 
              disabled={isLoading}
              style={{ fontSize: '1.5rem', padding: '0.2rem 0.5rem', border: 'none', background: 'transparent', color: '#000' }} // Basic styling for X
            >
              X
            </Button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default SavePageDesktop;
