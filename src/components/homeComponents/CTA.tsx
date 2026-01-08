import { useNavigate } from "react-router-dom";

function CTA() {
    const navigate = useNavigate()
    return (
        <div>
            <h2>E muito mais!</h2>
            <button onClick={() =>navigate("/planos")}>Conheça os planos</button>
        </div>
    );
}

export default CTA;