import { Section } from "./Results"


type Params = {
    section: Section
    setModalSection: (_: Section) => void
}
export default ({ section, setModalSection }: Params) => {

    return <div onClick={() => setModalSection(section)} style={{cursor: "pointer"}}>
        <h1 style={{ color: "white", textAlign: "center", marginBottom: "5px" }}>{section.score}</h1>
        <p style={{ display: "inline-block", marginTop: "5px", marginBottom: "5px" }}>{section.reason}</p>
        <h3 style={{ display: "inline-block", color: "white" }}>...</h3>
        </div>
}
